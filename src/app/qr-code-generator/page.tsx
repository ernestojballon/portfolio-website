'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Download } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL' }),
  size: z.number().min(100).max(1000).default(300),
});

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
      size: 300,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = await QRCode.toDataURL(values.url, { width: values.size });
      setQrCode(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQRCode = () => {
    if (qrCode) {
      const link = document.createElement('a');
      link.href = qrCode;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="px-[5%] pt-24 md:pt-[17vh]">
      <div className="container ">
        <div className=" flex flex-col sm:flex-row sm:w-full">
          <div className=" sm:w-8/12 ">
            <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the URL you want to generate a QR code for.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Size (px)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the size of the QR code (100-1000 pixels).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Generate QR Code</Button>
              </form>
            </Form>
          </div>
          {qrCode && (
            <div className="p-8 sm:w-4/12 ">
              <h2 className="text-2xl font-bold mb-4">Generated QR Code</h2>
              <Image
                src={qrCode}
                alt="Generated QR Code"
                className="mx-auto mb-4"
                width={300}
                height={300}
              />
              <Button
                onClick={downloadQRCode}
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Download QR Code
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
