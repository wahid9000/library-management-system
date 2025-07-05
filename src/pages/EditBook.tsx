import { useLocation, useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/bookApi";
import { toast } from "react-toastify";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters",
  }),
  genre: z.string(),
  isbn: z.string(),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  copies: z.string(),
});

const EditBook = () => {
  const params = useParams();
  const id = params?.id;
  const state = useLocation();
  const bookInformation = state?.state?.book;
  const navigate = useNavigate();

  const [updateBook] = useUpdateBookMutation();

  const { title, description, genre, isbn, author, copies } = bookInformation;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      author: author,
      genre: genre,
      isbn: isbn,
      description: description,
      copies: String(copies),
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const booksData = {
      ...values,
      copies: Number(values.copies),
      available: Number(values.copies) > 0 ? true : false,
    };

    const res = await updateBook({
      id,
      booksData,
    });
    if (res) {
      form.reset();
      toast("Book Updated Successfully");
      navigate("/books");
    } else {
      toast("Failed to create book");
    }
  };

  const genres = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  return (
    <div className="max-w-3xl mt-5 mx-auto p-8 bg-white shadow-2xl rounded-3xl">
      <h2 className="text-3xl font-bold mb-8 text-black  inline-block pb-2">
        Edit Book
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Title & Author */}
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base font-semibold text-gray-800">
                    *Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Book title"
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
              name="author"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base font-semibold text-gray-800">
                    *Author
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Author name"
                      {...field}
                      className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white rounded-lg p-3 shadow-sm transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Genre, ISBN, Copies */}
          <div className="flex flex-wrap md:flex-nowrap  justify-between gap-6">
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-black">
                      {genres.map((genre) => (
                        <SelectItem key={genre} value={genre}>
                          {genre.replace("_", " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base font-semibold text-gray-800">
                    *ISBN
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ISBN Number"
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
              name="copies"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base font-semibold text-gray-800">
                    *Copies
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Available copies"
                      {...field}
                      className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white rounded-lg p-3 shadow-sm transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-gray-800">
                  *Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a short description..."
                    {...field}
                    className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 bg-white rounded-lg p-3 shadow-sm transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="cursor-pointer w-full bg-indigo-950 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          >
            Edit Book
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditBook;
