// Convex database schema: defines the shape of documents we store
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Single \"users\" table holding all journal entries and their metadata
export default defineSchema({
  users: defineTable({
    text: v.string(),
    summary: v.string(),
    mood: v.string(),
    moodEmoji: v.string(),
    createdAt: v.number(),
  }),
});