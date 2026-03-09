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
