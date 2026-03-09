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
