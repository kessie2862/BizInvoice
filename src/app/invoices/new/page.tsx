import { sql } from 'drizzle-orm';
import { db } from '@/db';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default async function Dashboard() {
  const results = await db.execute(sql`SELECT current_database()`);
  console.log('Database result', results);

  return (
    <main className="flex flex-col gap-6 justify-center h-full w-[95%] max-w-5xl mx-auto my-12">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">Create Invoice</h1>
      </div>

      {JSON.stringify(results)}
      <form className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block font-semibold text-sm mb-2">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block font-semibold text-sm mb-2">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
        </div>
        <div>
          <Label htmlFor="value" className="block font-semibold text-sm mb-2">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block font-semibold text-sm mb-2"
          >
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
