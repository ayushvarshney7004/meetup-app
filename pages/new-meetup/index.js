import NewMeetupForm from "@/component/Meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetup() {
  const router = useRouter();
  async function AddMeetUpHandler(eneteredMeetupData) {
    console.log(eneteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(eneteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title> add new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networks"
        />
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetUpHandler} />;
    </Fragment>
  );
}
export default NewMeetup;
