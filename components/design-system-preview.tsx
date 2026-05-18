"use client";

import {
  BotIcon,
  ComponentIcon,
  Layers3Icon,
  SparklesIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const tokens = [
  "bg-base",
  "bg-surface",
  "bg-elevated",
  "text-copy-primary",
  "text-copy-muted",
  "text-brand",
  "bg-accent-dim",
];

export function DesignSystemPreview() {
  return (
    <main className="min-h-screen bg-base px-6 py-10 text-copy-primary">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-3xl border border-surface-border bg-[radial-gradient(circle_at_top,var(--accent-primary-dim),transparent_42%),linear-gradient(180deg,var(--bg-elevated),var(--bg-surface))] p-8 shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-accent-dim px-3 py-1 text-sm text-brand">
                <SparklesIcon className="h-4 w-4" />
                Design System Foundation
              </div>
              <h1 className="font-heading text-4xl tracking-tight text-copy-primary">
                Dark technical workspace primitives are now wired into the app.
              </h1>
              <p className="max-w-2xl text-base text-copy-secondary">
                This preview imports every required `shadcn/ui` primitive and
                renders them against the project token set so we can verify the
                design system foundation end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>
                  Open dialog
                </DialogTrigger>
                <DialogContent className="max-w-xl rounded-3xl border border-surface-border bg-elevated text-copy-primary">
                  <DialogHeader>
                    <DialogTitle>AI workspace controls</DialogTitle>
                    <DialogDescription className="text-copy-muted">
                      The dialog primitive is installed, themed, and ready for
                      project workflows.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <Input placeholder="System prompt title" />
                    <Textarea placeholder="Describe the architecture behavior you want the AI to generate." />
                  </div>
                  <DialogFooter className="rounded-b-3xl border-surface-border bg-subtle/70">
                    <Button variant="secondary">Save draft</Button>
                    <Button>Run analysis</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <Tabs
          defaultValue="components"
          className="gap-6"
        >
          <TabsList className="border border-surface-border bg-surface p-1">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="tokens">Theme Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="outline-none">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="rounded-2xl border border-surface-border bg-surface/90">
                <CardHeader className="border-b border-surface-border">
                  <CardTitle>Primitive Preview</CardTitle>
                  <CardDescription className="text-copy-muted">
                    Button, Card, Input, Tabs, Textarea, Dialog, and ScrollArea
                    are all installed and imported here.
                  </CardDescription>
                  <CardAction className="hidden sm:block">
                    <div className="rounded-xl border border-surface-border bg-subtle px-3 py-1 text-xs text-copy-muted">
                      `cn()` active
                    </div>
                  </CardAction>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2 text-sm text-copy-secondary">
                      Project name
                      <Input placeholder="Payments platform redesign" />
                    </label>
                    <label className="space-y-2 text-sm text-copy-secondary">
                      Workspace owner
                      <Input placeholder="kaustubh@example.com" />
                    </label>
                  </div>
                  <label className="mt-4 block space-y-2 text-sm text-copy-secondary">
                    Design brief
                    <Textarea
                      className="min-h-28"
                      placeholder="List the services, storage layers, external dependencies, and scaling constraints."
                    />
                  </label>
                </CardContent>
                <CardFooter className="flex flex-wrap justify-between gap-3 rounded-b-2xl border-surface-border bg-subtle/60">
                  <div className="flex items-center gap-2 text-sm text-copy-muted">
                    <BotIcon className="h-4 w-4 text-ai-text" />
                    AI generation ready
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost">Cancel</Button>
                    <Button>Generate architecture</Button>
                  </div>
                </CardFooter>
              </Card>

              <Card className="rounded-2xl border border-surface-border bg-surface/90">
                <CardHeader className="border-b border-surface-border">
                  <CardTitle>Scrollable Inventory</CardTitle>
                  <CardDescription className="text-copy-muted">
                    The scroll area stays on-brand with the dark surface stack.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-5">
                  <ScrollArea className="h-72 rounded-2xl border border-surface-border bg-base/70 p-4">
                    <div className="space-y-3 pr-3">
                      {[
                        {
                          icon: Layers3Icon,
                          title: "Canvas shell",
                          body: "Full-viewport workspace layout with layered surfaces and border tokens.",
                        },
                        {
                          icon: ComponentIcon,
                          title: "Primitive imports",
                          body: "Generated shadcn files remain untouched while app-level surfaces compose them.",
                        },
                        {
                          icon: BotIcon,
                          title: "AI affordances",
                          body: "Accent and AI tokens are available for future prompt panels, task states, and assistant feedback.",
                        },
                        {
                          icon: SparklesIcon,
                          title: "Token utilities",
                          body: "App utilities like bg-base, text-copy-primary, and bg-accent-dim are available now.",
                        },
                      ].map(({ icon: Icon, title, body }) => (
                        <div
                          key={title}
                          className={cn(
                            "rounded-2xl border border-surface-border bg-surface px-4 py-3",
                            title === "AI affordances" && "bg-accent-dim/60"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className="rounded-xl border border-surface-border bg-base p-2 text-brand">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-copy-primary">
                                {title}
                              </p>
                              <p className="text-sm text-copy-muted">{body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="outline-none">
            <Card className="rounded-2xl border border-surface-border bg-surface/90">
              <CardHeader className="border-b border-surface-border">
                <CardTitle>Tokenized Utilities</CardTitle>
                <CardDescription className="text-copy-muted">
                  These utilities are mapped in `app/globals.css` and available
                  to feature components.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-5">
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {tokens.map((token) => (
                    <div
                      key={token}
                      className="rounded-2xl border border-surface-border bg-base px-4 py-3"
                    >
                      <p className="text-sm font-medium text-copy-primary">
                        {token}
                      </p>
                      <p className="mt-1 text-sm text-copy-muted">
                        Ready to use in app-level UI.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
