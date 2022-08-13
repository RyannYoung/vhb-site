import Button from "./components/Button";
import HeroVideo from "./components/HeroVideo";
import { MdEmojiEvents } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { AnimatePresence, motion, Variants } from "framer-motion";
import VhbVideo from "./assets/vhb_compressed_demo.mp4";
import VhbReaction from "./assets/vhb_reaction.gif";
import VhbAccumulator from "./assets/vhb_accumulator.gif";
import VhbBanner from "./assets/banner.png";
import VhbSequence from "./assets/vhb_sequence.gif";
import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
import { useState } from "react";

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

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="overflow-hidden bg-stone-50">
      <HeroVideo />
      <div className="absolute rounded-b-3xl shadow-2xl inset-0  w-full max-h-screen aspect-video overflow-hidden bg-black/80 z-10 flex justify-center items-center">
        <motion.section
          initial="hidden"
          animate="show"
          variants={container}
          className="flex items-center flex-col"
        >
          <motion.h1
            variants={item}
            className="font-bold  text-6xl text-orange-50 text-center tracking-widest font-primary"
          >
            Virtual Human Benchmark
          </motion.h1>
          <motion.p
            variants={item}
            className="text-orange-50 my-8 max-w-2xl text-xl text-center font-secondary"
          >
            The VR Human Benchmark application (VHB) was developed as a tool to
            assist research into the benefits of virtual reality on a user's
            cognitive and physical abilities. The application contains a variety
            of tests derived from both the Human Benchmark web application, and
            the BATAK reaction test.
          </motion.p>
          <motion.div variants={item} className="flex gap-4">
            <Button text="Request a Demo" icon={<MdEmojiEvents />} />
            <Button text="Contact Us" icon={<IoMdContact />} />
          </motion.div>
          <motion.p variants={item} className="text-white my-4 font-secondary">
            Version 1.0
          </motion.p>
        </motion.section>
      </div>

      <main className="w-full flex justify-center my-24">
        <section className="prose-lg max-w-4xl">
          <h1 className="font-primary">Virtual Human Benchmark</h1>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                exit={{ opacity: 0 }}
                className="text-orange-50 shadow font-secondary px-4 py-2 rounded-xl bg-orange-500 flex items-center font-normal"
              >
                <AiFillWarning className="mr-2 text-2xl" />
                <span>
                  Please not this product is still in early development.
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
          {/* print lorem ipsum */}
          <p className="font-secondary">
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
            The project's current state (v1.0) is considered a stable release
            version that contains three of the four outlined modes within the
            project scope. These include:{" "}
          </p>
          <ul className="list-disc font-secondary">
            <li className="">
              <b>Accumulator Test</b>: The BATAK lightboard will light up a
              single target at a time, the user must then strike the target for
              another to appear. The objective of this mode is to strike as many
              targets as possible during a set time limit (i.e., 30/60 seconds).
              The purpose of this challenge is to assess the user's agility and
              reaction time.
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
            <li>
              <b>Sequence Test</b>: The board will display a pattern of targets
              (flashing one after another) which the user must repeat. Every
              time the user successfully repeats the displayed pattern, the
              board will then display a pattern with increased difficulty. The
              purpose of this mode is to examine the short-term memory,
              cognitive processing, and judgement of the user. Note: Additional
              tests may be developed in the future.
            </li>
          </ul>
          <h2 className="font-primary text-orange-900">Game Modes</h2>
          <p className="font-secondary">
            As previously discussed, the current version of the Human Benchmark
            application currently supports three game modes
          </p>
          <h3 className="font-primary">Accumulator</h3>
          <p className="font-secondary">
            The BATAK lightboard will light up a single target at a time, the
            user must then strike the target for another to appear. The
            objective of this mode is to strike as many targets as possible
            during a set time limit (i.e., 30/60 seconds). The purpose of this
            challenge is to assess the user's agility and reaction time
          </p>
          <div className="px-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ margin: "-200px" }}
              className="rounded-xl shadow-2xl overflow-hidden bg-orange-600"
            >
              <img src={VhbAccumulator} className="object-contain p-0 m-0" />
            </motion.div>
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
          <div className="px-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ margin: "-200px" }}
              className="rounded-xl shadow-2xl overflow-hidden bg-orange-600"
            >
              <img src={VhbReaction} className="object-contain p-0 m-0" />
            </motion.div>
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
          <div className="px-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ margin: "-200px" }}
              className="rounded-xl shadow-2xl overflow-hidden bg-blue-300"
            >
              <img src={VhbSequence} className="object-cover p-0 m-0" />
            </motion.div>
          </div>
          <h2 className="font-primary text-orange-900">Data Export</h2>
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
            file formats for use within other applications/services These can be
            found at:
          </p>
          <h3 className="font-primary">Windows</h3>
          <p className="font-secondary">
            VR headsets that utilise the Windows operating system persist the
            applications data under the following file location. These include
            headsets such as the HP Reverb G2 and Oculus Rift.
          </p>
          <div className="w-full bg-[#3D4451] text-white px-8 py-4 rounded-xl">
            <div className="flex mb-4 gap-3">
              <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
              <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
              <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
            </div>
            <div>
              <span className="font-code mr-4 text-slate-500">{">"}</span>
              <code className="font-code">
                %userprofile%\AppData\LocalLow\Capstone Project\Virtual Human
                Benchmark
              </code>
            </div>
          </div>

          <h3 className="font-primary">Android</h3>
          <p className="font-secondary">
            VR headsets that do not require a Windows environment (i.e.,
            standalone headsets), likely run within the Android OS. These
            include headsets such as the popular Oculus Quest 2.
          </p>
          <div className="w-full bg-[#3D4451] text-white px-8 py-4 rounded-xl">
            <div className="flex mb-4 gap-3">
              <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
              <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
              <div className="aspect-square rounded-full bg-slate-500 w-3"></div>
            </div>
            <div>
              <span className="font-code mr-4 text-slate-500">{">"}</span>
              <code className="font-code">
                /storage/emulated/0/Android/Virtual Human Benchmark/files
              </code>
            </div>
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
          <div className="flex justify-center gap-8">
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                RY
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Ryan Young</span>
                <span className="font-secondary text-sm">
                  ryanjackyoung@gmail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                KA
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Kevin Adamz</span>
                <span className="font-secondary text-sm">
                  kevin.adamz@someemail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                LS
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Liam Searle</span>
                <span className="font-secondary text-sm">
                  liam.searle@someemail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex items-center justify-center text-2xl font-bold text-white aspect-square w-24 bg-orange-500 border-4 border-orange-600 rounded-full shadow-xl">
                TD
              </div>
              <div className="flex flex-col my-2">
                <span className="font-secondary">Tashi Dhenup</span>
                <span className="font-secondary text-sm">
                  tashi.dhenup@someemail.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 rounded-t-xl">
        <div className="flex justify-center w-full p-12">
          <div className="grid grid-cols-3 max-w-6xl gap-8 text-center">
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
