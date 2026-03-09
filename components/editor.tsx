// Simple text editor for writing a journal entry
"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

// Props expected by the JournalEditor component
interface JournalEditorProps {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
}

// Renders the editor card with a textarea and a save button
export function JournalEditor({ value, onChange, onSave }: JournalEditorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Journal Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Write your thoughts here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[200px] resize-y text-base"
        />
        <Button onClick={onSave} size="lg" className="w-full sm:w-auto">
          Save Entry
        </Button>
      </CardContent>
    </Card>
  );
}
