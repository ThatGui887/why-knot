// Lists and manages previously saved journal entries
"use client";

import { Button } from "@/components/ui/button";
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

// Shape of a single journal entry used throughout the UI
export interface JournalEntry {
  id: string;
  text: string;
  summary: string;
  mood: string;
  moodEmoji: string;
  date: string;
}

// Props expected by the PreviousEntries list component
interface PreviousEntriesProps {
  entries: JournalEntry[];
  onEdit: (entry: JournalEntry) => void;
  onDelete: (id: string) => void;
}

// Renders either an empty state or a list of saved entries with edit/delete actions
export function PreviousEntries({
  entries,
  onEdit,
  onDelete,
}: PreviousEntriesProps) {
  if (entries.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Previous Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            No entries yet. Write something above and save to see it here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Previous Entries</h2>
      <ul className="space-y-4">
        {entries.map((entry) => (
          <li key={entry.id}>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {new Date(entry.date).toLocaleDateString(undefined, {
                    dateStyle: "medium",
                  })}
                </CardTitle>
              </CardHeader>
