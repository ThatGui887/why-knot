// Shows the \"AI\" summary and mood for the current journal entry
"use client";

import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card";

// Props expected by the AIReflection component
interface AIReflectionProps {
  summary: string;
  mood: string;
  moodEmoji: string;
}
