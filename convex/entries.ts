import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getEntries = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const createEntry = mutation({
  args: {
    text: v.string(),
    summary: v.string(),
    mood: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      text: args.text,
      summary: args.summary,
      mood: args.mood,
      createdAt: Date.now(),
    });
  },
});