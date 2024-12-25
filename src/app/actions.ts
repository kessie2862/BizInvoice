'use server';

import { redirect } from 'next/navigation';

import { db } from '@/db';
import { Invoices } from '@/db/schema';

export async function createAction(formData: FormData) {
  const value = Math.floor(parseFloat(String(formData.get('value'))));
  const description = formData.get('description') as string;

  // Insert the new invoice into the database
  const results = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: 'open',
    })
    .returning({ id: Invoices.id });

  // Redirect to the newly created invoice
  redirect(`/invoices/${results[0].id}`);
}
