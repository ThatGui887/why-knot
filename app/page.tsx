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
