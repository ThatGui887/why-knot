// Mark this page as a client component so we can use hooks
"use client";

import { useState, useCallback } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { JournalEditor } from "@/components/editor";
import { AIReflection } from "@/components/aiResult";
import {PreviousEntries,type JournalEntry,} from "@/components/entries";
// Simple list of moods we randomly pick from for each entry
const MOODS: { mood: string; emoji: string }[] = [
  { mood: "Calm", emoji: "😌" },
  { mood: "Grateful", emoji: "🙏" },
  { mood: "Reflective", emoji: "🤔" },
  { mood: "Hopeful", emoji: "✨" },
  { mood: "Content", emoji: "😊" },
  { mood: "Thoughtful", emoji: "💭" },
  { mood: "Peaceful", emoji: "🌿" },
  { mood: "Inspired", emoji: "💡" },
];

// Very basic "AI-like" summary helper that shortens the text
function mockSummary(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "No content.";
  if (trimmed.length <= 100) return trimmed;
  return trimmed.slice(0, 97) + "...";
}
// Randomly pick a mood + emoji for the current entry
function mockMood(): { mood: string; emoji: string } {
  return MOODS[Math.floor(Math.random() * MOODS.length)];
}