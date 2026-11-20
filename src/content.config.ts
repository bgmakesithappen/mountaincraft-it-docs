import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Page kinds. Each kind has required fields so a draft PR (human or agent)
// fails the build if it drops one. Pages without `kind` are plain prose pages.
// Credentials are never written here: `credentials` holds password-manager item names only.

const owner = z.string().min(1); // a role or team, e.g. "IT lead", not a personal email
const reviewed = z.coerce.date();

const service = z.object({
	kind: z.literal('service'),
	owner,
	status: z.enum(['planned', 'operational', 'degraded', 'down', 'retired']),
	criticality: z.enum(['high', 'medium', 'low']),
	hosted_on: z.string().min(1),
	admin_access: z.string().min(1), // who can administer it
	credentials: z.array(z.string()).default([]), // password-manager item names
	last_reviewed: reviewed,
});

const runbook = z.object({
	kind: z.literal('runbook'),
	owner,
	applies_to: z.array(z.string()).min(1), // service page slugs, e.g. "services/wifi"
	risk: z.enum(['low', 'medium', 'high']),
	last_reviewed: reviewed,
});

const policy = z.object({
	kind: z.literal('policy'),
	owner,
	approved_by: z.string().min(1),
	effective: z.coerce.date(),
	last_reviewed: reviewed,
});

const decision = z.object({
	kind: z.literal('decision'),
	status: z.enum(['proposed', 'accepted', 'superseded']),
	date: z.coerce.date(),
	superseded_by: z.string().optional(),
});

const page = z.object({ kind: z.literal('page').optional() });

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: z.union([service, runbook, policy, decision, page]) }),
	}),
};
