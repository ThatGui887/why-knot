// Shows the \"AI\" summary and mood for the current journal entry
"use client";

import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card";

// Props expected by the AIReflection component
interface AIReflectionProps {
  summary: string;
  mood: string;
  moodEmoji: string;
}

// Read-only card that displays the summary text and mood emoji
export function AIReflection({ summary, mood, moodEmoji }: AIReflectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Reflection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Summary
          </p>
          <p className="text-foreground">
            {summary || "—"}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            Mood
          </p>
          <p className="text-foreground flex items-center gap-2">
            <span className="text-2xl" aria-hidden>{moodEmoji || "—"}</span>
            <span>{mood || "—"}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
