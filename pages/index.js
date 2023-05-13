import MeetupList from "../component/Meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
// const Dummy_list = [
//   {
//     id: "m1 ",
//     title: "test meetup ",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/3/37/Cathedral_Church_of_the_Redemption_-_New_Delhi.jpg",
//     address: "test town , ohio -11078",
//     description: "first meetup",
//   },
//   {
//     id: "m2 ",
//     title: "test  meetup_2 ",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/3/37/Cathedral_Church_of_the_Redemption_-_New_Delhi.jpg",
//     address: "test town , ohio -11078",
//     description: "second meetup",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetup</title>
        <meta
          name="description"
          content="Browse a huge list of higly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}
// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   return {
//     props:{
//       meetups:Dummy_list,
//     }
//   }
// }

export async function getStaticProps() {
  //fetch api
  const client = await MongoClient.connect(
    "mongodb+srv://ayush003:ayu9953@first-app-nextjs.qb5yptu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
