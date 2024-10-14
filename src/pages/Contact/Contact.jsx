import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const Contact = () => {
  const contactData = [
    { key: "name", label: "name", placeholder: "john doe" },
    { key: "email", label: "email", placeholder: "example@mail.com" },
    { key: "help", label: "Select Help Type", placeholder: "choose" },
    {
      key: "description",
      label: "description",
      placeholder: "Enter your description",
    },
  ];

  const help = [
    { key: "Complaint", label: "Complaint" },
    { key: "Report a bug", label: "Report a bug" },
    { key: "Feedback", label: "Feedback" },
    { key: "Suggestions", label: "Suggestions" },
  ];

  return (
    <div className="container mx-auto h-[45vh] mt-5">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium mb-5">Contact Us</h2>
        {contactData.map((item) => (
          <div key={item.label} className="mt-3">
            {item.key === "name" || item.key === "email" ? (
              <Input
                type="email"
                label={item.label}
                placeholder={item.placeholder}
                size="lg"
                radius="lg"
                variant="faded"
                className="w-[500px] capitalize font-medium"
              />
            ) : item.key === "help" ? (
              <Select
                items={help}
                label={item.label}
                placeholder={item.placeholder}
                size="lg"
                variant="faded"
                className="w-[500px] font-medium text-secondary/50"
              >
                {(help) => <SelectItem>{help.label}</SelectItem>}
              </Select>
            ) : (
              <Textarea
                label={item.label}
                placeholder={item.placeholder}
                size="lg"
                variant="faded"
                className="w-[500px] capitalize font-medium"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
