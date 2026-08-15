"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Background organic shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-growth-green/[0.03] blur-3xl" />
          <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-leaf-gold/[0.04] blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-green/[0.02] blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* Form Panel */}
            <div className="relative">
              {/* Decorative accent line */}
              <div className="absolute -left-4 top-0 hidden h-full w-1 rounded-full bg-gradient-brand sm:block" aria-hidden />

              <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-elevation-2">
                {/* Form header band */}
                <div className="relative bg-gradient-to-br from-ink via-ink-surface to-ink px-8 py-10 sm:px-10 sm:py-12">
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '256px 256px'
                  }} aria-hidden />
                  <div className="relative">
                    <p className="text-caption font-semibold uppercase tracking-[0.2em] text-white/60">
                      Get in touch
                    </p>
                    <h2 className="mt-3 font-heading text-h3 font-bold text-white sm:text-h2">
                      Send us a <span className="text-growth-green">message</span>
                    </h2>
                    <p className="mt-3 max-w-md text-body text-white/65">
                      Fill out the form below and our team will get back to you within one business day.
                    </p>
                  </div>
                </div>

                {/* Form body */}
                <div className="px-8 py-10 sm:px-10 sm:py-12">
                  <form id="contact-form" className="space-y-7">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2.5">
                        <Label htmlFor="contact-name" className="text-caption font-semibold uppercase tracking-wider text-text-secondary">
                          Full name
                        </Label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Efua Mensah"
                          required
                          className="h-12 rounded-xl border-border/60 bg-subtle-surface px-5 text-body transition-all duration-200 placeholder:text-text-secondary/50 focus-visible:border-growth-green focus-visible:bg-surface focus-visible:shadow-elevation-2"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="contact-email" className="text-caption font-semibold uppercase tracking-wider text-text-secondary">
                          Email address
                        </Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="h-12 rounded-xl border-border/60 bg-subtle-surface px-5 text-body transition-all duration-200 placeholder:text-text-secondary/50 focus-visible:border-growth-green focus-visible:bg-surface focus-visible:shadow-elevation-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <Label htmlFor="contact-role" className="text-caption font-semibold uppercase tracking-wider text-text-secondary">
                        I am a…
                      </Label>
                      <Select defaultValue="parent" name="role">
                        <SelectTrigger
                          id="contact-role"
                          className="h-12 rounded-xl border-border/60 bg-subtle-surface px-5 text-body transition-all duration-200 focus:border-growth-green focus:bg-surface focus:shadow-elevation-2"
                        >
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

                    <div className="space-y-2.5">
                      <Label htmlFor="contact-message" className="text-caption font-semibold uppercase tracking-wider text-text-secondary">
                        Your message
                      </Label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us a bit about what you're looking for…"
                        className="flex w-full rounded-xl border border-border/60 bg-subtle-surface px-5 py-4 text-body text-text-primary shadow-elevation-1 outline-none transition-all duration-200 placeholder:text-text-secondary/50 focus-visible:border-growth-green focus-visible:bg-surface focus-visible:shadow-elevation-2"
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-small text-text-secondary">
                        We typically respond within <span className="font-semibold text-text-primary">1 business day</span>.
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        className="group relative h-12 overflow-hidden rounded-full px-8 shadow-elevation-2 transition-all duration-300 hover:shadow-elevation-3 active:scale-[0.98]"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Send message
                          <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                        <span className="absolute inset-0 -z-0 bg-gradient-to-r from-growth-green to-leaf-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info Panel */}
            <div className="space-y-6">
              {/* Contact details card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-elevation-1 sm:p-10">
                {/* Decorative corner accent */}
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-[0.06] blur-2xl" aria-hidden />

                <div className="relative">
                  <p className="text-caption font-semibold uppercase tracking-[0.2em] text-heading-accent">
                    Contact information
                  </p>
                  <h3 className="mt-3 font-heading text-h5 font-bold text-text-primary">
                    Let&apos;s start a conversation
                  </h3>
                  <p className="mt-2 text-body text-text-secondary">
                    Reach out through any of these channels and we&apos;ll connect you with the right person.
                  </p>

                  <ul className="mt-8 space-y-5">
                    {contactDetails.map((d) => (
                      <li key={d.label} className="group flex items-start gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-forest-green-text transition-all duration-200 group-hover:scale-105 group-hover:bg-primary/15">
                          <d.icon className="size-5" />
                        </span>
                        <div className="pt-1">
                          <p className="text-caption font-medium uppercase tracking-wider text-text-secondary">
                            {d.label}
                          </p>
                          <p className="mt-0.5 text-body font-medium text-text-primary">{d.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map / location card */}
              <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-subtle-surface p-8 sm:p-10">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-forest-green-text">
                    <MapPin className="size-7" />
                  </div>
                  <div>
                    <p className="font-heading text-h5 font-semibold text-text-primary">Our headquarters</p>
                    <p className="mt-1 text-body text-text-secondary">Kumasi, Ghana</p>
                    <p className="mt-1 text-small text-text-secondary">
                      Serving learners across Africa and beyond
                    </p>
                  </div>
                </div>

                {/* Decorative map dots */}
                <div className="absolute inset-0 overflow-hidden" aria-hidden>
                  <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-growth-green/20" />
                  <div className="absolute left-[25%] top-[60%] h-1.5 w-1.5 rounded-full bg-leaf-gold/30" />
                  <div className="absolute right-[20%] top-[40%] h-2 w-2 rounded-full bg-growth-green/15" />
                  <div className="absolute right-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-leaf-gold/20" />
                </div>
              </div>

              {/* Trust indicator */}
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/50 px-6 py-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-growth-green/10 text-growth-green">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-body font-semibold text-text-primary">Verified NGO partner</p>
                  <p className="text-small text-text-secondary">Trusted by 48+ schools across Ghana</p>
                </div>
              </div>
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
              var originalContent = submitBtn.innerHTML;
              submitBtn.disabled = true;
              submitBtn.innerHTML = '<span class=\\'flex items-center justify-center gap-2\\'><svg class=\\'animate-spin size-4\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\'><circle class=\\'opacity-25\\' cx=\\'12\\' cy=\\'12\\' r=\\'10\\' stroke=\\'currentColor\\' stroke-width=\\'4\\'></circle><path class=\\'opacity-75\\' fill=\\'currentColor\\' d=\\'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\\'></path></svg>Sending...</span>';

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
                submitBtn.innerHTML = originalContent;
                if (result.ok) {
                  form.reset();
                  alert('Message sent successfully! Our team will be in touch within one business day.');
                } else {
                  alert(result.error || 'Something went wrong. Please try again.');
                }
              })
              .catch(function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                alert('Something went wrong. Please try again.');
              });
            });
          })();
        `,
      }}
    />
  );
}
