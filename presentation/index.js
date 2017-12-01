// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  network: "https://media.giphy.com/media/l0HlQCEq4A9H2evVC/giphy.gif",
  yuno: require("../assets/yuno.png"),
  sleeping: require("../assets/sleeping.jpg"),
  mehUmaru: require("../assets/umaru-meh.png"),
  happyUmaru: "https://media.giphy.com/media/v60KQg3MXLwTS/giphy.gif",
  why: "https://media.giphy.com/media/s239QJIh56sRW/giphy.gif",
  dressed: require("../assets/dressed.jpg"),
  soy: require("../assets/soy.jpg"),
  adobo: require("../assets/adobo.jpg"),
  crystal: "https://media.giphy.com/media/xT39D2UJcJ663GkPkY/giphy.gif",
  genius: "https://media.giphy.com/media/26FfiyD5IsjkAxNnO/giphy.gif",
  stock: "https://media.giphy.com/media/l41lZBP84rdzHnWA8/giphy.gif",
  hamster: "https://media.giphy.com/media/E0KmHELTpq9pK/giphy.gif",
  doctor: "https://media.giphy.com/media/80msmoARhhR16/giphy.gif",
  lucifer: "https://media.giphy.com/media/xT0xeACmWa9m5lz3uo/giphy.gif",
  math: "https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif",
  cry: "https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif",
  awesome: "https://media.giphy.com/media/IxKt9HOM1mI80/giphy.gif",
  blown: "https://media.giphy.com/media/3o8dFn5CXJlCV9ZEsg/giphy.gif",
  ewe: "https://media.giphy.com/media/26DOMeaD2gdGE44LK/giphy.gif",
  amazon: require("../assets/amazon.jpg"),
  engine: require("../assets/recommend.jpg"),
  build: "https://media.giphy.com/media/Rm1p7xp3Odl2o/giphy.gif"
};

const theme = createTheme({
  primary: "#FAFAFA",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const notes = [
  `
    Hi guys! I'm JP, a mobile and web developer at GAPLabs in Tacloban City
    and I like playing around with AI when I'm not working on anything else or chillin'.
    Now, I'm here to talk about Predictive Analytics
    and how not to bleed your eyes out trying to make it work
    with the help of Microsoft's mystical AI powers.
    Now you might be thinking, "what the hell is this guy talking about?
    what's this predictive ana-whatever thing?"
    And you're right. We have to answer that question.
  `,
  `
    What is Predictive Analytics? Anybody here who has heard of this before? Before this talk, I mean.
    This might sound complicated, but the concept is simple. Predictive Analytics is...
  `,
  `
    Making predictions from past data. That's basically it.
    You have past data, analyze it, and you guess what happens next.
    Let's try some quick examples so we get a quick feel.
  `,
  `
    Say your mother made you buy chicken and toyo before dinner.
    What do you expect your dinner to be?
    Any guesses?
  `,
  `
    So you can guess that it will be chicken adobo.
    But how did you do it?
    It's probably because you know what's in a chicken adobo
    because you saw your mother make it many times.
    You used that past data to predict that those two ingredients
    will result in chicken adobo.
    Let's try another example.
  `,
  `
    We have a series of numbers here and try to guess the number on the question mark.
    Any guesses? Yes, it's 13 and yes, this is the Fibonacci sequence of numbers.
    We were able to get the answer using the past data,
    which are the previous numbers of the sequence.
    That was pretty simple.
  `,
  `
    But we have to ask another big question -- why?
    Why even do predictive analysis?
    I mean, predicting that your dinner is chicken adobo isn't really a big deal, right?
    Well, the reason is, you can use this for almost anything, not just for predicting dinner.
    But let's frame it like this...
  `,
  `
    What if you could see the future?
  `,
  `
    What if you can be these guys?
    I mean don't be murdering psychopath if you can see the future.
    But maybe see the future and put the bad guys to rest.
    Now those are very contrived exampels so let's be a bit more realistic for a bit.
  `,
  `
    What are some possible applications of this?
  `,
  `
    You can try predicting the coverage or generate questions for an exam if you're a student.
    There's a free tool called DeepQuiz that creates questions for you when you
    enter a bunch of text. So that's one application.
  `,
  `
    You can also try predicting the rise and fall of stock prices if you're in business.
    You just might get rich, you know?
  `,
  `
    If you're in HR or recruitment, you can try predicting future employee performance
    using past and current employee data. This can help you save you from wasting valuable resource when hiring.
  `,
  `
    Accurate diagnoses of disorders like skin cancer, diabetic retinopathy, and pneumonia
    are being made from images taken from patients. These are made possible by analyzing
    past images of these disorders with the help of doctors all around world.
  `,
  `
    Some police and government institutions use data to narrow down the location of a suspect.
    If you think about it, there are a lot of things that you can do in this field.
  `,
  `
    This sounds really awesome! How do we get started?
  `,
  `
    The predictive analytics process has 5 steps.
    That sounds pretty simple and straightforward, right?
  `,
  `
    Well we got a problem. The problem is, simple doesn't mean easy.
    You thought it was easy? Guess, what? NO LOL
    Why?
  `,
  `
    Because this involves a huge quantity of math, especially with the learning part of the process.
    A mathematical model is usually created using the past data in order to predict events and such.
    Which makes the practice of predictive analytics pretty difficult.
    But that was a couple of years ago. Today, some organizations have created services
    in order to bring predictive analytics to us normies. One of those organizations is...
  `,
  `
    Microsoft. Microsoft has a couple of services that cater to all kinds of situations
    where you might want to use predictive analytics.
    First is what sir Allan talked about -- Cognitive Services.
    It can do things like object, face, and emotion recognition, translation,
    speech to text and text to speech, entity search, and more just by sending
    HTTP requests.
    Then we have Azure Machine Learning Studio which allows us more flexibility
    with what we do with our data and how we do our predictive analytics, by just
    dragging and dropping, all without writing a single line of code.
    Azure Databricks allows realtime analytics by pulling data from a bunch of different sources
    and feeding them into your code and learning from it in realtime using Spark, so you won't miss a beat.
    Then we have Microsoft Machine Learning Server which has the power of Spark, R, Python and their
    respective data science libraries along with Jupyter for experimentation. This is also a solution
    you can use even when offline because you can host it yourself on your own computer.
  `,
  `
    Oh, look! We have a client! Meet Umarun! *Read description*
  `,
  `
    Raise of hands who knows what a recommendation system is?
    Well, it looks like this. Well this looks like Amazon's recommendations.
    They have personalized recommendations based on what you've
    previously bought and what you've viewed.
  `,
  `
    The guy on the left has liked a bunch of items and the guy on the right
    has liked most of the items they guy on the left liked. So we'd like to think
    that they have similar tastes so we then recommend an item the guy on the left likes
    to the guy on the right. This is how recommendation engines work.
    The process is actually more mathematically involved but this is the concept behind it.
  `,
  `
    Our boss, Umarun is satisfied with our prototype and can't wait to begin raking in the dough!
    As you can see it is very easy to begin doing predictive analytics with Microsoft AI.
  `,
  `
    There are a bunch of more awesome things you can build with this
    and the other Microsoft technologies.
    There is a lot of data out there like the Open Data in the data.gov.ph site.
    I hope you enjoyed and I can't wait to see what you make in the future!
  `
];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="tertiary" notes={notes[0]}>
          <Heading size={2} caps textColor="primary">
            Predictive Analytics with Microsoft AI
          </Heading>
          <Text margin="30px 0 0" textColor="secondary" size={3}>
            Learn to do predictive analytics without shedding blood, sweat, and tears.
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgDarken={0.6} bgImage={images.network} notes={notes[1]}>
          <Heading size={1} textColor="primary">What is Predictive Analytics?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[2]}>
          <Heading size={3} textColor="tertiary">Making predictions from past data.</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[3]}>
          <Layout>
            <Fill>
              <Image src={images.dressed} />
            </Fill>
            <Fill>
              <Image src={images.soy} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgDarken={0.4} bgImage={images.adobo} notes={notes[4]}>
          <Heading size={3} textColor="primary">Chicken Adobo</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[5]}>
          <Heading size={1} textColor="tertiary">1, 1, 2, 3, 5, 8, ?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[5]}>
          <Heading size={1} textColor="tertiary">1, 1, 2, 3, 5, 8, 13</Heading>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.3} bgColor="tertiary" bgImage={images.why} notes={notes[6]}>
          <Heading size={1} textColor="primary">Why?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgDarken={0.6} bgImage={images.crystal} notes={notes[7]}>
          <Heading size={3} textColor="primary">What if you could see the future?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[8]}>
          <Layout align={"space-around center"}>
            <Fill>
              <Image src={images.yuno} margin={20} padding={20} />
            </Fill>
            <Fill>
              <Image src={images.sleeping} margin={20} padding={20} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes={notes[9]}>
          <Heading size={2} textColor="primary">Possible Applications</Heading>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.4} bgImage={images.genius} notes={notes[10]}>
          <Heading size={3} textColor="primary">Predicting the coverage of an exam</Heading>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.4} bgImage={images.stock} notes={notes[11]}>
          <Heading size={3} textColor="primary">Predicting stock prices</Heading>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.4} bgImage={images.hamster} notes={notes[12]}>
          <Heading size={3} textColor="primary">Predicting employee performance</Heading>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.3} bgImage={images.doctor} notes={notes[13]}>
          <Heading size={3} textColor="primary">Diagnosing diseases</Heading>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.2} bgImage={images.lucifer} notes={notes[14]}>
          <Heading size={3} textColor="primary">Catching Criminals</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.awesome} notes={notes[15]} />
        <Slide transition={["fade"]} bgColor="primary" notes={notes[16]}>
          <Heading size={3} textColor="tertiary">Predictive Analytics Process</Heading>
          <Appear><Text margin="30px 0 0" textColor="secondary" size={4}>
            Get data
          </Text></Appear>
          <Appear><Text margin="30px 0 0" textColor="secondary" size={4}>
            Prepare your data
          </Text></Appear>
          <Appear><Text margin="30px 0 0" textColor="secondary" size={4}>
            Learn from the data
          </Text></Appear>
          <Appear><Text margin="30px 0 0" textColor="secondary" size={4}>
            Predict events using what you learned
          </Text></Appear>
          <Appear><Text margin="30px 0 0" textColor="secondary" size={4}>
            See if you predicted correctly
          </Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.cry} notes={notes[17]}>
          <Heading size={2} textColor="primary">Problem</Heading>
          <Appear>
            <Text size={4} textColor="primary">Simple ≠ Easy</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.3} bgImage={images.math} notes={notes[18]}>
          <Heading size={2} textColor="primary">Math!!</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary" notes={notes[19]}>
          <Heading size={2} textColor="primary">Microsoft AI</Heading>
          <Appear><Text size={4} textColor="primary">Cognitive Services</Text></Appear>
          <Appear><Text size={4} textColor="primary">Azure Machine Learning Studio</Text></Appear>
          <Appear><Text size={4} textColor="primary">Azure Databricks</Text></Appear>
          <Appear><Text size={4} textColor="primary">Machine Learning Server</Text></Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" notes={notes[20]}>
          <Heading size={3} margin="20px" textColor="tertiary">Meet Umarun</Heading>
          <Layout>
            <Fill>
              <Text margin="10px" textColor="secondary" size={6}>
                Umarun has an anime streaming site and she thinks an anime recommendation feature would be a nice addition to her site.
              </Text>
            </Fill>
            <Fill>
              <Image margin="10px" src={images.mehUmaru} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" notes={notes[21]}>
          <Heading size={4} margin="30px" textColor="secondary">Recommendation Systems</Heading>
          <Appear><Image src={images.amazon} /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" notes={notes[22]}>
          <Image width={1000} src={images.engine} />
        </Slide>
        <Slide transition={["fade"]} bgDarken={0.4} bgImage={images.build}>
          <Heading size={2} textColor="primary">Let's start building!</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.happyUmaru} notes={notes[23]} />
        <Slide transition={["fade"]} bgImage={images.blown} notes={notes[24]} />
        <Slide transition={["fade"]} bgImage={images.ewe} />
      </Deck>
    );
  }
}
