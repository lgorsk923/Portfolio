"use client";
import '../globals.css';
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { afacad } from "../fonts";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldLabel
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,

    InputGroupTextarea,
} from "@/components/ui/input-group";
import { forwardContactEmail } from "../../lib/send-contact-email";

export interface contactFormData {
    subject?: string;
    name: string;
    email: string;
    message: string;
}

export const formSchema = z.object({
    subject: z.string().optional(),
    name: z.string().min(1, { message: "Name is required" }),
    email: z.email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

export default function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            name: "",
            email: "",
            message: ""
        }
    });

    return (
        <Card className="w-full !bg-theme-teal">
            <CardContent>
                <form action={forwardContactEmail} className={`${afacad.className} space-y-4 text-black`}>
                    <div>
                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="cf-subject">Subject</FieldLabel>
                                    <Input
                                        {...field}
                                        id="cf-subject"
                                        placeholder="Subject"
                                        type="text"
                                        className='bg-white text-black'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="cf-name">Name</FieldLabel>
                                    <Input
                                        {...field}
                                        id="cf-name"
                                        placeholder="Name"
                                        type="text"
                                        className='bg-white text-black'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="cf-email">Email</FieldLabel>
                                    <Input
                                        {...field}
                                        id="cf-email"
                                        placeholder="Email"
                                        type="email"
                                        className='bg-white text-black'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="cf-message">Message</FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="cf-message"
                                            placeholder="Message"
                                            rows={5}
                                            className='bg-white text-black'
                                        />
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Button type="submit" className="mt-5 bg-theme-green text-black">
                            Submit
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}