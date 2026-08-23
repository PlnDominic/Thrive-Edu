"use client";

import * as React from "react";
import Image from "next/image";
import { ImageIcon, Loader2, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { uploadImage } from "@/lib/actions/upload";

interface ImageUploadFieldProps {
  name: string;
  label: string;
  defaultValue?: string | null;
  helpText?: string;
  /** aspect-square (default, for tiles/photos) or aspect-video (wider previews) */
  aspect?: "square" | "video";
}

// Drives a hidden text input with the given `name` so it submits with the
// surrounding <form> like any other field - the visible part is a preview
// thumbnail plus an upload button that posts straight to Supabase Storage
// (via the uploadImage server action) and fills the hidden input with the
// resulting public URL.
export function ImageUploadField({ name, label, defaultValue, helpText, aspect = "square" }: ImageUploadFieldProps) {
  const [value, setValue] = React.useState(defaultValue ?? "");
  const [uploading, setUploading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    const fd = new FormData();
    fd.set("file", file);
    const result = await uploadImage(fd);
    setUploading(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    if (result.url) setValue(result.url);
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <input type="hidden" name={name} value={value} />

      <div className="flex items-start gap-4">
        <div
          className={cn(
            "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-subtle-surface",
            aspect === "square" ? "size-24" : "h-24 w-40"
          )}
        >
          {uploading ? (
            <Loader2 className="size-5 animate-spin text-text-secondary" />
          ) : value ? (
            <Image src={value} alt="" fill sizes="160px" className="object-cover" unoptimized />
          ) : (
            <ImageIcon className="size-6 text-text-secondary/40" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="rounded-full"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
            >
              <Upload className="size-3.5" />
              {value ? "Replace photo" : "Upload photo"}
            </Button>
            {value && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="rounded-full text-error hover:bg-error/10"
                onClick={() => setValue("")}
              >
                <X className="size-3.5" />
                Remove
              </Button>
            )}
          </div>
          {helpText && <p className="text-caption text-text-secondary">{helpText}</p>}
          {error && (
            <p role="alert" className="text-caption font-medium text-error">
              {error}
            </p>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
