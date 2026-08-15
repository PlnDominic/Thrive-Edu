"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/marketing/section-heading";

const contactDetails = [
  { icon: MapPin, label: "Visit us", value: "Kumasi, Ghana" },
  { icon: Mail, label: "Email us", value: "info@thriveedu-africa.com" },
  { icon: Phone, label: "Call us", value: "0242806144" },
  { icon: Clock, label: "Office hours", value: "Mon–Fri, 8:00am – 5:00pm GMT" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/images/cta-collage-orange-laptop.jpg"
          alt="Contact Thrive EDU team"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
          <Badge variant="primary" className="mb-6 bg-surface">
            Contact us
          </Badge>
          <h1 className="font-heading text-h3 font-bold leading-[1.05] tracking-tight text-white sm:text-h2 lg:text-h1">
            We&apos;d love to <span className="text-growth-green">hear from you.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-body text-white/80 sm:text-body-lg">
            Questions about enrollment, partnerships, or how THRIVE EDU works for your school? Send us a
            message and our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[3fr_2fr]">
          <form
            id="contact-form"
            className="space-y-5 rounded-lg border border-border bg-surface p-8 shadow-elevation-1"
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
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-forest-green-text">
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
              <p className="text-small">Map: Kumasi, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      <ContactFormScript />
    </>
  );
}

function ContactFormScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var form = document.getElementById('contact-form');
            if (!form) return;
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              var submitBtn = form.querySelector('button[type="submit"]');
              var originalText = submitBtn.textContent;
              submitBtn.disabled = true;
              submitBtn.textContent = 'Sending...';

              var formData = new FormData(form);
              var data = {
                name: formData.get('name'),
                email: formData.get('email'),
                role: formData.get('role'),
                message: formData.get('message'),
              };

              fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              })
              .then(function(res) { return res.json(); })
              .then(function(result) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                if (result.ok) {
                  form.reset();
                  alert('Message sent successfully! Our team will be in touch within one business day.');
                } else {
                  alert(result.error || 'Something went wrong. Please try again.');
                }
              })
              .catch(function() {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                alert('Something went wrong. Please try again.');
              });
            });
          })();
        `,
      }}
    />
  );
}

