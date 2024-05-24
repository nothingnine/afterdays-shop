import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const InDev = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90">
        Checkout
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Payment System in Development
          </AlertDialogTitle>
          <AlertDialogDescription>
            <img className="w-[400px]" src="/in-dev.png" />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InDev;
