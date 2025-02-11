import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const ApplyJobDrawer = ({ job, applied, onApply }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Application Data:", data);
    onApply(data); 
    reset(); 
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          size="lg"
          variant={job?.isOpen && !applied ? "blue" : "destructive"}
          disabled={!job?.isOpen || applied}
        >
          {job?.isOpen ? (applied ? "Applied" : "Apply") : "Hiring Closed"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Apply for {job?.title} at {job?.company?.name}
          </DrawerTitle>
          <DrawerDescription>Please fill out the form below.</DrawerDescription>
        </DrawerHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-4 pb-0"
        >
          <Input
            type="number"
            placeholder="Years of Experience"
            className="flex-1"
            {...register("experience", {
              required: "Experience is required",
              valueAsNumber: true,
              min: { value: 0, message: "Experience must be a positive number" },
            })}
          />
            <Input
            type="text"
            placeholder="Skills (Comma Separated)"
            className="flex-1"
            {...register("skills")}
          />
          <RadioGroup defaultValue="Intermidiate">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Intermidiate" id="Intermidiate" />
    <Label htmlFor="Intermidiate">Intermidiate</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Graduate" id="Graduate" />
    <Label htmlFor="Graduate">Graduate</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Post Graduate" id="Post Graduate" />
    <Label htmlFor="Post Graduate">Post Graduate</Label>
  </div>
</RadioGroup>
<Input
            type="file"
            accept=".pdf, .doc, .docx"
            className="flex-1 file:text-gray-500"
            {...register("resume")}
          />

          <Button type="submit" variant="blue" size="lg">
            Apply
          </Button>

          </form>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" onClick={() => reset()}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        
      </DrawerContent>
    </Drawer>
  );
};

export default ApplyJobDrawer;
