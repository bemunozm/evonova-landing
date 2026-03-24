import { NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  fullName: z.string().trim().min(2, 'fullName must be at least 2 characters'),
  workEmail: z.string().trim().email('workEmail must be a valid email'),
  companyName: z.string().trim().min(2, 'companyName must be at least 2 characters'),
  jobTitle: z.string().trim().min(2).max(120).optional(),
  phone: z.string().trim().min(7).max(25).optional(),
  companySize: z
    .enum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'])
    .optional(),
  interest: z.string().trim().min(2).max(120).optional(),
  message: z.string().trim().min(10).max(2000).optional(),
  source: z
    .object({
      channel: z.string().trim().min(2).max(80).optional(),
      campaign: z.string().trim().min(2).max(120).optional(),
      medium: z.string().trim().min(2).max(120).optional(),
    })
    .optional(),
  consent: z.literal(true),
});

type LeadInput = z.infer<typeof leadSchema>;

type StoredLead = LeadInput & {
  id: string;
  createdAt: string;
  status: 'new';
};

const getLeadStore = (): StoredLead[] => {
  const globalStore = globalThis as typeof globalThis & { __leadsStore?: StoredLead[] };

  if (!globalStore.__leadsStore) {
    globalStore.__leadsStore = [];
  }

  return globalStore.__leadsStore;
};

const prepareLeadNotification = (lead: StoredLead) => ({
  to: 'sales@evonova.com',
  subject: `Nuevo lead B2B: ${lead.companyName}`,
  template: 'new-b2b-lead',
  payload: {
    leadId: lead.id,
    createdAt: lead.createdAt,
    fullName: lead.fullName,
    workEmail: lead.workEmail,
    companyName: lead.companyName,
    jobTitle: lead.jobTitle ?? null,
    phone: lead.phone ?? null,
    companySize: lead.companySize ?? null,
    interest: lead.interest ?? null,
    message: lead.message ?? null,
    source: lead.source ?? null,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Invalid payload',
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const lead: StoredLead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: 'new',
      ...parsed.data,
    };

    const store = getLeadStore();
    store.push(lead);

    const emailPayload = prepareLeadNotification(lead);

    return NextResponse.json(
      {
        ok: true,
        data: {
          leadId: lead.id,
          status: lead.status,
        },
        emailPayload,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: 'Malformed JSON body',
      },
      { status: 400 },
    );
  }
}
