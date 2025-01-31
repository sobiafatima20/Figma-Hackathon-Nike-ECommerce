export const userSchema = {
    name: "user",
    type: "document",
    title: "User",
    fields: [
      {
        name: "firstName",
        type: "string",
        title: "First Name",
      },
      {
        name: "lastName",
        type: "string",
        title: "Last Name",
      },
      {
        name: "email",
        type: "string",
        title: "Email",
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: "hashedPassword",
        type: "string",
        title: "Hashed Password",
      },
      {
        name: "dob",
        type: "date",
        title: "Date of Birth",
      },
      {
        name: "country",
        type: "string",
        title: "Country",
      },
      {
        name: "gender",
        type: "string",
        title: "Gender",
        options: {
          list: ["Male", "Female"],
        },
      },
    ],
  };

  