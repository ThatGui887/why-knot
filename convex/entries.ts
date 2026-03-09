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
