import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router";
import { useCreateBorrowMutation } from "@/redux/api/borrowApi";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const formSchema = z.object({
  quantity: z.string().min(1, {
    message: "Minimum 1 quantity is required.",
  }),
  dueDate: z.date({
    required_error: "A due date is required.",
  }),
});

const CreateBorrow = () => {
  const params = useParams();
  const bookId = params.id;
  const { state } = useLocation();
  const bookInfo = state?.book;
  console.log("🚀 ~ CreateBorrow ~ state:", state);
  console.log("🚀 ~ CreateBorrow ~ bookId:", bookId);
  const [createBorrow] = useCreateBorrowMutation();
  const navigate = useNavigate();

  const [openCalendar, setOpenCalendar] = useState(false);
  const handleCloseCalendar = () => {
    setOpenCalendar(!openCalendar);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "",
      dueDate: new Date(),
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const borrowData = {
      ...values,
      quantity: Number(values.quantity),
      book: bookId,
    };

    if (!bookInfo.available) {
      return toast.error(`Book is not available at the moment.`);
    }

    if (borrowData.quantity > bookInfo.copies) {
      return toast.error(
        `Only ${bookInfo?.copies} copies of book are available at the moment.`
      );
    }

    const res = await createBorrow(borrowData).unwrap();
    if (res) {
      form.reset();
      toast("Book Borrowed Successfully");
      navigate("/borrow-summary");
    } else {
      toast("Failed to borrow book");
    }
  };

  return (
    <div className="max-w-3xl mt-5 mx-auto p-8 bg-white shadow-2xl rounded-3xl">
      <h2 className="text-3xl font-bold mb-8 text-black  inline-block pb-2">
        Borrow Book - {bookInfo?.title}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Title & Author */}
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base font-semibold text-gray-800">
                    *Quantity To Borrow
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Quantity to borrow"
                      {...field}
                      className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white rounded-lg p-3 shadow-sm transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base font-semibold text-gray-800">
                    Due Date
                  </FormLabel>
                  <Popover
                    open={openCalendar}
                    onOpenChange={() => handleCloseCalendar()}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpenCalendar(false);
                        }}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="cursor-pointer w-full bg-indigo-950 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          >
            Borrow
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateBorrow;
