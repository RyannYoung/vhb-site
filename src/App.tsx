import Button from "./components/Button";
import HeroVideo from "./components/HeroVideo";
import { MdEmojiEvents } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { lioshi as syntaxTheme } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import VhbReaction from "./assets/gif2vid/vhb_reaction.mp4";
import VhbAccumulator from "./assets/gif2vid/vhb_accumulator.mp4";
import VhbSequence from "./assets/gif2vid/vhb_sequence.mp4";
import VhbBanner from "./assets/banner.png";
import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
import { useState } from "react";
import Modal from "./components/Modal";
import Terminal from "./components/Terminal";
import json from "./assets/samplejson.json";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { BiAnalyse } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import JSONModal from "./components/JSONModal";
import CSVModal from "./components/CSVModal";
import NewFeature from "./components/NewFeature";
import Key from "./components/Key";
import controller from "./assets/cmappings.png";
import BoardGrid from "./components/BoardGrid";
import TheLab from "./assets/levels/the-lab-2.png";
import TheLab2 from "./assets/levels/vhb-thelab.png";
import TheLobby from "./assets/levels/the-lobby-upgraded.png";
import Insights from "./assets/insights.png";
import Insights2 from "./assets/insights-2.png";
import useWindowSize from "./hooks/useWindowSize";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const firebaseConfig = {
  apiKey: "AIzaSyCiZ5wObTYlbnm2AjzsYJX7eSH-TlVqOYk",
  authDomain: "virtual-human-benchmark.firebaseapp.com",
  projectId: "virtual-human-benchmark",
  storageBucket: "virtual-human-benchmark.appspot.com",
  messagingSenderId: "516637642270",
  appId: "1:516637642270:web:1eb0d2b9f9aa2321f6a80f",
};

initializeApp(firebaseConfig);

const storage = getStorage();

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const { width, height } = useWindowSize();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-stone-50 w-screen flex flex-col gap-12">
      <Modal
        open={modalOpen}
        closeModal={closeModal}
        title={"🚫 Unimplemented Feature"}
        description={
          "This feature is currently being worked on. It will be available in a future release. Sorry for the inconvenience."
        }
      />
      <HeroVideo />
      <div className="absolute rounded-b-3xl shadow-2xl inset-0 w-full max-h-screen aspect-video overflow-hidden bg-black/80 z-10 flex justify-center items-center">
        <motion.section
          initial="hidden"
          animate="show"
          variants={container}
          className="flex items-center flex-col gap-4"
        >
          <motion.h1
            variants={item}
            className="font-bold text-2xl lg:text-6xl text-orange-50 text-center tracking-widest font-primary"
          >
            Virtual Human Benchmark
          </motion.h1>
          <motion.p
            variants={item}
            className="text-orange-50 text-xs max-w-xs text-justify lg:max-w-2xl lg:text-xl lg:text-center font-secondary"
          >
            {width > 600 ? (
              <span>
                The VR Human Benchmark application (VHB) was developed as a tool
                to assist research into the benefits of virtual reality on a
                user's cognitive and physical abilities. The application
                contains a variety of tests derived from both the Human
                Benchmark web application, and the BATAK reaction test.
              </span>
            ) : (
              <p className="text-center">
                A virtual reality-based assessment tool for use in health and
                sports-science
              </p>
            )}
          </motion.p>
          {width > 600 && (
            <motion.div variants={item} className="flex gap-4">
              <Button
                text="Request a Demo"
                onClick={() => openModal()}
                icon={<MdEmojiEvents />}
              />
              <Button
                text="Contact Us"
                onClick={() => openModal()}
                icon={<IoMdContact />}
              />
              <Button
                text="Data Viewer"
                onClick={() => openModal()}
                icon={<BiAnalyse />}
              />
              <Button
                text="User Guide"
                onClick={() => {
                  getDownloadURL(
                    ref(
                      storage,
                      "gs://virtual-human-benchmark.appspot.com/User_Guide_VHB.pdf"
                    )
                  )
                    .then((url) => {
                      // `url` is the download URL for 'images/stars.jpg'

                      // This can be downloaded directly:
                      const xhr = new XMLHttpRequest();
                      xhr.responseType = "blob";
                      xhr.onload = (event) => {
                        const blob = URL.createObjectURL(xhr.response);
                        var a = document.createElement(
                          "a"
                        ) as HTMLAnchorElement;
                        document.body.appendChild(a);
                        a.href = blob;
                        a.download = "User_Guide_VHB.pdf";
                        a.click();
                        window.URL.revokeObjectURL(blob);
                      };
                      xhr.open("GET", url);
                      xhr.send();
                    })
                    .catch((error) => {
                      // Handle any errors
                      console.log(error);
                    });
                }}
                icon={<HiOutlineDocumentDownload />}
              />
            </motion.div>
          )}
          <motion.p
            variants={item}
            className="text-white flex gap-4 text-xs my-4 font-secondary"
          >
            <span>App: v1.0</span>
            <span>Web: v1.0</span>
            <span>Data Viewer: v1.0</span>
          </motion.p>
        </motion.section>
      </div>

      <main className="w-full flex justify-center">
        <section className="prose-sm lg:prose-lg lg:text-left text-justify max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl">
          <h1 className="font-primary text-center lg:text-left">
            Virtual Human Benchmark
          </h1>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                exit={{ opacity: 0 }}
                className="text-orange-50 shadow font-secondary px-4 py-2 rounded-xl bg-orange-500 flex items-center font-normal w-full"
              >
                <AiFillWarning className="mr-2 text-2xl" />
                <span className="text-xs md:text-base">
                  Please note: this product is still in early development.
                </span>
                <button
                  onClick={() => setIsVisible(false)}
                  className="ml-auto text-2xl"
                >
                  <AiFillCloseCircle />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-secondary text-xs lg:text-base">
            The VR Human Benchmark application (VHB) was developed as a tool to
            assist research into the benefits of virtual reality on a user's
            cognitive and physical abilities. The application contains a variety
            of tests derived from both the Human Benchmark web application, and
            the BATAK reaction test.
          </p>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-lg shadow-2xl"
            src={VhbBanner}
          />
          <h2 className="font-primary text-orange-900">Description</h2>
          <p className="font-secondary">
            The project's current state (v1.2) is considered a stable release
            version that contains various improvements to the application. These
            include:{" "}
          </p>
          <ul className="lg:list-disc p-0 lg:pl-8 font-secondary">
            <li className="">
              <b>Accumulator Test</b>: The BATAK lightboard will light up a
              single target at a time, the user must then strike the target for
              another to appear. The objective of this mode is to strike as many
              targets as possible during a set time limit (i.e., 30/60 seconds).
              The purpose of this challenge is to assess the user's agility and
              reaction time.
            </li>
            <li className="">
              <b>Accumulator Test (Score-Variant)</b>: User's have unlimited
              time to hit 30 targets. The purpose of this challenge is to assess
              the user's agility and reaction time without needing to race the
              clock.
            </li>
            <li>
              <b>Reaction Test</b>: After a random interval the board will
              activate all targets, the user must then react (by pressing a
              button on the controller) as fast as possible. This process
              repeats over a set of intervals (i.e., 5) in which each reaction
              time is recorded. The purpose of this test is to primarily assess
              the user's ability to mentally process information as fast as
              possible.
            </li>
            <li className="">
              <b>Reaction Test (Touch-Variant)</b>: The stimuli of the reaction
              test has been changed from visual (the board lighting up) to
              touch. The controllers will vibrate randomly, the user must react
              to this vibration
            </li>
            <li>
              <b>Sequence Test</b>: The board will display a pattern of targets
              (flashing one after another) which the user must repeat. Every
              time the user successfully repeats the displayed pattern, the
              board will then display a pattern with increased difficulty. The
              purpose of this mode is to examine the short-term memory,
              cognitive processing, and judgement of the user. Note: Additional
              tests may be developed in the future.
            </li>
            <li className="">
              <b>Sequence Test (Stateful-Variant)</b>: The board will always
              repeat the same pattern. However, each time the user successfully
              completes the challenge, the board will add one more target to the
              pattern. The purpose of this mode is to examine the short-term and
              long-term memory, cognitive processing, and judgement of the user.
            </li>
          </ul>
          <h2 className="font-primary text-orange-900">Game Modes</h2>
          <p className="font-secondary">
            As previously discussed, the current version of the Human Benchmark
            application currently supports three game modes.
          </p>

          <div className="flex gap-4 items-center lg:flex-col lg:items-start lg:gap-0">
            <h3 className="font-primary sm:m-0 text-orange-900">Variants</h3>
            <NewFeature className="mt-4" title="Variants" />
          </div>
          <p className="font-secondary">
            The later versions support variants of the original three modes.
            Variants are near-identical to their original however the
            target/goals of the mode are slightly different. For example, the
            reaction test has a variant that requires the user to react to a
            when the controllers vibrate (touch/feel sensation).
          </p>

          <h3 className="font-primary">Accumulator</h3>
          <p className="font-secondary">
            The BATAK lightboard will light up a single target at a time, the
            user must then strike the target for another to appear. The
            objective of this mode is to strike as many targets as possible
            during a set time limit (i.e., 30/60 seconds). The purpose of this
            challenge is to assess the user's agility and reaction time
          </p>
          <div className="lg:px-32">
            {width > 768 ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ margin: "-200px" }}
                className="rounded-xl shadow-2xl overflow-hidden bg-orange-600"
              >
                <video
                  src={VhbAccumulator}
                  autoPlay
                  loop
                  muted
                  className="object-cover p-0 m-0"
                />
              </motion.div>
            ) : (
              <div className="rounded-xl shadow-2xl overflow-hidden bg-orange-600">
                <video
                  src={VhbAccumulator}
                  autoPlay
                  loop
                  muted
                  className="object-contain p-0 m-0"
                />
              </div>
            )}
          </div>
          <h3 className="font-primary">Reaction</h3>
          <p className="font-secondary">
            After a random interval the board will activate all targets, the
            user must then react (by pressing a button on the controller) as
            fast as possible. This process repeats over a set of intervals
            (i.e., 5) in which each reaction time is recorded. The purpose of
            this test is to primarily assess the user's ability to mentally
            process information as fast as possible.
          </p>
          <div className="lg:px-32">
            <div className="lg:px-32">
              {width > 768 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ margin: "-200px" }}
                  className="rounded-xl shadow-2xl overflow-hidden bg-orange-600"
                >
                  <video
                    src={VhbReaction}
                    autoPlay
                    loop
                    muted
                    className="object-contain p-0 m-0"
                  />
                </motion.div>
              ) : (
                <div className="rounded-xl shadow-2xl overflow-hidden bg-orange-600">
                  <video
                    src={VhbReaction}
                    autoPlay
                    loop
                    muted
                    className="object-contain p-0 m-0"
                  />
                </div>
              )}
            </div>
          </div>
          <h3 className="font-primary">Sequence</h3>
          <p className="font-secondary">
            The board will display a pattern of targets (flashing one after
            another) which the user must repeat. Every time the user
            successfully repeats the displayed pattern, the board will then
            display a pattern with increased difficulty. The purpose of this
            mode is to examine the short-term memory, cognitive processing, and
            judgement of the user. Note: Additional tests may be developed in
            the future.
          </p>
          <div className="lg:px-32">
            <div className="lg:px-32">
              {width > 768 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ margin: "-200px" }}
                  className="rounded-xl shadow-2xl overflow-hidden bg-orange-600"
                >
                  <video
                    src={VhbSequence}
                    autoPlay
                    loop
                    muted
                    className="object-contain p-0 m-0"
                  />
                </motion.div>
              ) : (
                <div className="rounded-xl shadow-2xl overflow-hidden bg-orange-600">
                  <video
                    src={VhbSequence}
                    autoPlay
                    loop
                    muted
                    className="object-contain p-0 m-0"
                  />
                </div>
              )}
            </div>
          </div>
          <h2 className="font-primary text-orange-900">Data</h2>
          <p className="font-secondary">
            Upon completion of a test, a set of data will be generated providing
            insights into the performance indicators based upon the specific
            test. Data is exported into both{" "}
            <a
              href="/"
              className="text-orange-900 font-bold hover:underline underline-offset-4"
            >
              JSON
            </a>{" "}
            and{" "}
            <a
              href="/"
              className="text-orange-900 font-bold hover:underline underline-offset-4"
            >
              CSV
            </a>{" "}
            file formats for use within other applications/services.
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            <JSONModal description={json} title="JSON" />
            <CSVModal
              title="CSV"
              table={
                <table className="table table-fixed w-fit text-sm border-2 border-orange-600">
                  <thead className="bg-orange-600 text-orange-50">
                    <tr>
                      <th>Time</th>
                      <th>Target Time</th>
                      <th>Start Time</th>
                      <th>Reaction Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>45.95</td>
                      <td>3.06</td>
                      <td>41.89</td>
                      <td>1.01</td>
                    </tr>
                    <tr>
                      <td>47.93</td>
                      <td>2.24</td>
                      <td>4.89</td>
                      <td>1.32</td>
                    </tr>
                    <tr>
                      <td>51.24</td>
                      <td>3.56</td>
                      <td>41.29</td>
                      <td>1.89</td>
                    </tr>
                  </tbody>
                </table>
              }
            />
          </div>
          <div className="flex gap-4 items-center lg:flex-col lg:items-start lg:gap-0">
            <h3 className="font-primary sm:m-0 text-orange-900">
              Extended Dataset
            </h3>
            <NewFeature
              className="mt-4"
              title="Extended Datasets for all primary modes"
            />
          </div>
          <p className="font-secondary">
            Recent updates {"(>v1.0)"} of the Virtual Human Benchmark
            application now support more detailed datasets for all primary
            modes. See below for the base structure of the new datasets.
          </p>

          <SyntaxHighlighter language="typescript" style={syntaxTheme}>
            {`Data {
  id: number;
  test: {
    name: string;
    timeStarted: string | number;
    timeEnded: string | number;
    settings: {
      [key: string]: any;
    };
  };
  date: string | number;
  user: {
    alias: string;
    age: number;
  };
  snapshots: ReactionSnapshot[] | AccumulatorSnapshot[] | SequenceSnapshot[];
  misc: {
    [key: string]: any;
  };
}`}
          </SyntaxHighlighter>

          <h3 className="font-primary">Windows</h3>
          <p className="font-secondary">
            VR headsets that utilise the Windows operating system persist the
            applications data under the following file location. These include
            headsets such as the HP Reverb G2 and Oculus Rift.
          </p>

          <Terminal
            content="%userprofile%\AppData\LocalLow\Capstone Project\Virtual Human
                Benchmark"
          />

          <div className="flex flex-col gap-2 my-8">
            <NewFeature title="You can now see your exports in the My Documents folder" />
            <Terminal content="%userprofile%\Documents\VHB" />
          </div>

          <h3 className="font-primary">Android</h3>
          <p className="font-secondary">
            VR headsets that do not require a Windows environment (i.e.,
            standalone headsets), likely run within the Android OS. These
            include headsets such as the popular Oculus Quest 2.
          </p>
          <Terminal content="/storage/emulated/0/Android/Virtual Human Benchmark/files" />

          <h2 className="font-primary text-orange-900">
            Insights <sub>by VHB</sub>
          </h2>
          <p className="font-secondary">
            An offline, installable application that provides support for
            parsing the VHB raw datasets into easy-to-read visual graphics,
            summaries and tables
          </p>
          <p>
            Note: Insights is still a work in progress. For more information
            about the project{" "}
            <a
              href="https://github.com/RyannYoung/vhb-insights"
              className="font-bold text-orange-600"
            >
              Click Here
            </a>
          </p>

          <div className="grid lg:grid-cols-2 gap-2">
            <img src={Insights} className="object-contain shadow-md" />
            <img src={Insights2} className="object-contain shadow-md" />
          </div>

          <div className="flex gap-4 items-center lg:flex-col lg:items-start lg:gap-0">
            <h3 className="font-primary sm:m-0 text-orange-900">
              Keymappings {width > 600 && `(Windows-exclusive)`}
            </h3>
            <NewFeature
              className="mt-4"
              title="Keymappings are now available for Windows users"
            />
          </div>

          <p className="font-secondary">
            Keyboard mappings are now supported on Windows XR devices. See below
            for the list of currently supported mappings.
          </p>

          <div className="grid text-xs lg:text-base grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2">
            <Key kbd="A" command="Select Accumulator" />
            <Key kbd="S" command="Select Reaction" />
            <Key kbd="D" command="Select Sequence" />
            <Key kbd="Z" command="Select Accumulator (Variant)" />
            <Key kbd="X" command="Select Reaction (Variant)" />
            <Key kbd="C" command="Select Sequence (Variant)" />
            <Key kbd="G" command="Change Board Layout" />
            <Key kbd="V" command="Cancel Selection" />
            <Key kbd="R" command="Run Selected Game" />
          </div>

          <h2 className="font-primary text-orange-900">Controller Mappings</h2>
          <NewFeature title="Keymappings are now available for Windows users" />
          <p className="font-secondary">
            To ease usability, later VHB versions support multiple controller
            mappings. See below for the list of currently supported mappings.
            All modern controllers supporting the OpenVR API are supported.
          </p>

          <div className="flex w-full">
            <img className="m-auto max-w-xs lg:max-w-2xl" src={controller} />
          </div>

          <div className="flex gap-4 items-center lg:flex-col lg:items-start lg:gap-0">
            <h3 className="font-primary sm:m-0 text-orange-900">
              Board Layouts
            </h3>
            <NewFeature
              className="mt-4"
              title="Variety of quick-switchable board layouts"
            />
          </div>

          <p className="font-secondary">
            The board now supports a variety of different layouts of the batak
            buttons. To toggle between the layouts, press the{" "}
            <b>change board layout</b> mapping on the keyboard or the
            controller. All gamemodes form identical across different board
            layouts
          </p>

          <BoardGrid />

          <div className="flex gap-4 items-center lg:flex-col lg:items-start lg:gap-0">
            <h3 className="font-primary sm:m-0 text-orange-900">
              Upgraded Scenes
            </h3>
            <NewFeature className="mt-4" title="New stages to play on" />
          </div>

          <p className="font-secondary">
            User's are able to freely switch between levels, based on their
            scene preferences. Most scenes act identical to one another, and are
            purely for aethstetic. However, some are designed for considerations
            such as mobile performance.
          </p>

          {/* Level Grid */}
          <div className="grid lg:grid-cols-3 gap-4 mb-24">
            <img
              src={TheLab}
              className="w-full h-full object-cover shadow-md rounded-md overflow-hidden"
            />
            <img
              src={TheLobby}
              className="w-full h-full object-cover shadow-md rounded-md overflow-hidden"
            />
            <img
              src={TheLab2}
              className="w-full h-full object-cover shadow-md rounded-md overflow-hidden"
            />
          </div>

          <div>
            <p className="font-secondary">
              Version 1.2 supports both an additional scene (The Lab), and an
              upgraded lobby scene with accessible improvements to the
              user-experiences.
            </p>

            <p className="font-secondary">
              <i>The Lab</i> is a mobile-focussed scene to primarily support
              less performant hardware such as those found within mobile virtual
              reality headsets. The Lab therefore includes updates to lighting,
              removal of unnecessary animations and background elements leading
              to higher performance for end users
            </p>
          </div>

          <h2 className="font-primary text-orange-900">Want to know more?</h2>
          <p className="font-secondary">
            This product is still <b>early development</b>. Many features are
            subject to change. If you have any ideas, or suggestions please let
            us know.
          </p>

          <h2 className="font-primary text-orange-900">Contact the team</h2>
          <p className="font-secondary">
            For any enquiries about the project. Please contact the team at{" "}
            <span>someemail@email.com</span>. To directly get in contact with an
            individual member see below:
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-16 lg:w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                RY
              </div>
              <div className="flex flex-col my-2 gap-1">
                <span className="font-secondary">Ryan Young</span>
                <span className="font-secondary text-[8px] lg:text-sm">
                  ryanjackyoung@gmail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-16 lg:w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                KA
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Kevin Adamz</span>
                <span className="font-secondary text-[8px] lg:text-sm">
                  kevin.adamz@someemail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-16 lg:w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                LS
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Liam Searle</span>
                <span className="font-secondary text-[8px] lg:text-sm">
                  liam.searle@someemail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-16 lg:w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                TD
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Tashi Dhenup</span>
                <span className="font-secondary text-[8px] lg:text-sm">
                  tashi.dhenup@someemail.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 rounded-t-xl">
        <div className="flex justify-center w-full p-12">
          <div className="grid lg:grid-cols-3 max-w-6xl gap-8 text-center">
            <div className="text-2xl text-white font-primary tracking-wider text-center">
              <p>Virtual Human Benchmark</p>
            </div>
            <span className="text-white font-secondary text-center tracking-widest">
              Created by the 2022 Project Team at the University of Canberra
            </span>
            <span className="font-code text-white text-center">
              All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
