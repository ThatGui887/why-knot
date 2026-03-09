// Convex backend functions for creating, listing, updating, and deleting journal entries
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new journal entry document in the \"users\" table
export const createEntry = mutation({
  args: {
    text: v.string(),
    summary: v.string(),
    mood: v.string(),
    moodEmoji: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      text: args.text,
      summary: args.summary,
      mood: args.mood,
      moodEmoji: args.moodEmoji,
      createdAt: Date.now(),
    });
  },
});

// Fetch all journal entries, newest first
export const listEntries = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("users")
      .order("desc")
      .collect();
  },
});

// Update an existing entry by its id
export const updateEntry = mutation({
  args: {
    id: v.id("users"),
    text: v.string(),
    summary: v.string(),
    mood: v.string(),
    moodEmoji: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      text: args.text,
      summary: args.summary,
      mood: args.mood,
      moodEmoji: args.moodEmoji,
    });
  },
});

// Permanently remove an entry by its id
export const deleteEntry = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

