import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        text: v.string(),
        summary: v.string(),
        mood: v.string(),
        createdAt: v.number(),
    }),
})