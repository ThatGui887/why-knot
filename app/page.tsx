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

// Convert a Convex document into the shape our UI components expect
function docToEntry(doc: {
  _id: Id<"users">;
  text: string;
  summary: string;
  mood: string;
  moodEmoji: string;
  createdAt: number;
}): JournalEntry {
  return {
    id: doc._id,
    text: doc.text,
    summary: doc.summary,
    mood: doc.mood,
    moodEmoji: doc.moodEmoji,
    date: new Date(doc.createdAt).toISOString(),
  };
}

// Main journal page: handles text input, saving, editing, and deleting entries
export default function JournalPage() {
  const [entryText, setEntryText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [reflection, setReflection] = useState<{
    summary: string;
    mood: string;
    moodEmoji: string;
  }>({ summary: "", mood: "", moodEmoji: "" });

  const convexEntries = useQuery(api.entries.listEntries);
  const createEntry = useMutation(api.entries.createEntry);
  const updateEntry = useMutation(api.entries.updateEntry);
  const deleteEntry = useMutation(api.entries.deleteEntry);

  const entries: JournalEntry[] = convexEntries
    ? convexEntries.map(docToEntry)
    : [];

  const handleSave = useCallback(async () => {
    const text = entryText.trim();
    if (!text) return;

    const { mood, emoji } = mockMood();
    const summary = mockSummary(text);

    if (editingId) {
      await updateEntry({
        id: editingId as Id<"users">,
        text,
        summary,
        mood,
        moodEmoji: emoji,
      });
      setEditingId(null);
    } else {
      await createEntry({ text, summary, mood, moodEmoji: emoji });
    }

    setReflection({ summary, mood, moodEmoji: emoji });
    setEntryText("");
  }, [entryText, editingId, createEntry, updateEntry]);

  const handleEdit = useCallback((entry: JournalEntry) => {
    setEntryText(entry.text);
    setEditingId(entry.id);
    setReflection({
      summary: entry.summary,
      mood: entry.mood,
      moodEmoji: entry.moodEmoji,
    });
  }, []);

  const handleDelete = useCallback(
    async (id: string) => {
      await deleteEntry({ id: id as Id<"users"> });
      if (editingId === id) {
        setEditingId(null);
        setEntryText("");
        setReflection({ summary: "", mood: "", moodEmoji: "" });
      }
    },
    [editingId, deleteEntry]
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-10">
          AI Daily Journal
        </h1>

        <div className="space-y-8">
          <JournalEditor
            value={entryText}
            onChange={setEntryText}
            onSave={handleSave}
          />

          <AIReflection
            summary={reflection.summary}
            mood={reflection.mood}
            moodEmoji={reflection.moodEmoji}
          />

          <PreviousEntries
            entries={entries}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}
