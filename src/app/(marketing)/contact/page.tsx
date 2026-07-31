"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/marketing/section-heading";
import { toast } from "@/hooks/use-toast";

const contactDetails = [
  { icon: MapPin, label: "Visit us", value: "12 Independence Avenue, Accra, Ghana" },
  { icon: Mail, label: "Email us", value: "hello@thriveedu.org" },
  { icon: Phone, label: "Call us", value: "+233 20 123 4567" },
  { icon: Clock, label: "Office hours", value: "Mon–Fri, 8:00am – 5:00pm GMT" },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-subtle-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-caption font-semibold uppercase tracking-wide text-forest-green">Contact us</p>
          <h1 className="font-heading text-h3 font-bold text-text-primary sm:text-h1">We&apos;d love to hear from you</h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            Questions about enrollment, partnerships, or how THRIVE EDU works for your school? Send us a
            message and our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[3fr_2fr]">
          <form
            className="space-y-5 rounded-lg border border-border bg-surface p-8 shadow-elevation-1"
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Message sent",
                description: "Thanks for reaching out. Our team will be in touch within one business day.",
                variant: "success",
              });
              e.currentTarget.reset();
            }}
          >
            <SectionHeading title="Send us a message" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name">Full name</Label>
                <Input id="contact-name" name="name" placeholder="Efua Mensah" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-role">I am a…</Label>
              <Select defaultValue="parent" name="role">
                <SelectTrigger id="contact-role">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="parent">Parent / Guardian</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="school-owner">School owner / Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us a bit about what you're looking for…"
                className="flex w-full rounded-md border border-border bg-surface px-4 py-3 text-body text-text-primary shadow-elevation-1 outline-none transition-colors duration-150 placeholder:text-text-secondary/70 focus-visible:border-growth-green focus-visible:ring-2 focus-visible:ring-growth-green/25"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send message
            </Button>
          </form>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-surface p-8 shadow-elevation-1">
              <p className="font-heading text-h5 font-semibold text-text-primary">Contact information</p>
              <ul className="mt-5 space-y-5">
                {contactDetails.map((d) => (
                  <li key={d.label} className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-forest-green">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-caption font-medium uppercase tracking-wide text-text-secondary">{d.label}</p>
                      <p className="text-small font-medium text-text-primary">{d.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-subtle-surface text-text-secondary">
              <MapPin className="size-6" />
              <p className="text-small">Map: Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
