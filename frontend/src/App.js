// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Kiit_logo from "./pages/KIIT_logo.png";

import NavBarChanger from "./pages/NavBarchanger";
import sidebar from "./pages/sidebar";
import Feedback from "./pages/feedback";
import Contact from "./pages/contact";

import Home from "./pages/home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SemSelection from "./pages/sem_selection";
import Sem1 from "./pages/sem1/sem1";

import Bio from "./pages/sem1/bio/bio";
import BioTopicNotes from "./pages/sem1/bio/topicwisenotes/topicwisenotes";

import Bms from "./pages/sem1/bms/bms";
import BmsTopicNotes from "./pages/sem1/bms/topicwisenotes/topicwisenotes";

import Chem from "./pages/sem1/chem/chem";
import ChemTopicNotes from "./pages/sem1/chem/topicwisenotes/topicwisenotes";

import Chemprac from "./pages/sem1/chemprac/chemprac";
import Chempracexperiments from "./pages/sem1/chemprac/experiments/topicwisenotes";

import Engggraph from "./pages/sem1/engggraph/engggraph";
import Engggraphassignment from "./pages/sem1/engggraph/assignment/topicwisenotes";

import Evs from "./pages/sem1/evs/evs";
import EvsTopicNotes from "./pages/sem1/evs/topicwisenotes/topicwisenotes";

import Langlab from "./pages/sem1/langlab/langlab";
import Langlabassignment from "./pages/sem1/langlab/assignment/topicwisenotes";

import Maths1 from "./pages/sem1/maths1/maths1";
import Maths1TopicNotes from "./pages/sem1/maths1/topicwisenotes/topicwisenotes";

import Pcomm from "./pages/sem1/pcomm/pcomm";
import PcommTopicNotes from "./pages/sem1/pcomm/topicwisenotes/topicwisenotes";

import Sem2 from "./pages/sem2/sem2";
import Aec from "./pages/sem2/aec/aec";
import AecTopicNotes from "./pages/sem2/aec/topicwisenotes/topicwisenotes";

import AecLab from "./pages/sem2/aeclab/aeclab";
import AecLabexperiments from "./pages/sem2/aeclab/experiments/topicwisenotes";

import Bee from "./pages/sem2/bee/bee";
import BeeTopicNotes from "./pages/sem2/bee/topicwisenotes/topicwisenotes";

import BeeLab from "./pages/sem2/beelab/beelab";
import BeeLabexperiments from "./pages/sem2/beelab/experiments/topicwisenotes";

import CProg from "./pages/sem2/cprog/cprog";
import CProgexperiments from "./pages/sem2/cprog/experiments/topicwisenotes";

import Maths from "./pages/sem2/maths/maths";
import MathsTopicNotes from "./pages/sem2/maths/topicwisenotes/topicwisenotes";

import Physics from "./pages/sem2/physics/physics";
import PhysicsTopicNotes from "./pages/sem2/physics/topicwisenotes/topicwisenotes";

import PhysicsLab from "./pages/sem2/physicslab/physicslab";
import PhysicsLabexperiments from "./pages/sem2/physicslab/experiments/topicwisenotes";

import Sem3 from "./pages/sem3/sem3";

import Dsa from "./pages/sem3/dsa/dsa";
import DsaTopicNotes from "./pages/sem3/dsa/topicwisenotes/topicwisenotes";

import Dsalab from "./pages/sem3/dsalab/dsalab";
import Dsalabassignment from "./pages/sem3/dsalab/assignment/topicwisenotes";

import Dec from "./pages/sem3/dec/dec";
import DecTopicNotes from "./pages/sem3/dec/topicwisenotes/topicwisenotes";
// import BaseConverter from "./pages/sem3/dec/calculators/base_conversion/App";

import Dms from "./pages/sem3/dms/dms";
import DmsTopicNotes from "./pages/sem3/dms/topicwisenotes/topicwisenotes";

import Ee from "./pages/sem3/ee/ee";
import EeTopicNotes from "./pages/sem3/ee/topicwisenotes/topicwisenotes";

import Oop from "./pages/sem3/oop/oop";
import OopTopicNotes from "./pages/sem3/oop/topicwisenotes/topicwisenotes";

import Ooplab from "./pages/sem3/ooplab/ooplab";
import Ooplabassignment from "./pages/sem3/ooplab/assignment/topicwisenotes";

import Ps from "./pages/sem3/ps/ps";
import PsTopicNotes from "./pages/sem3/ps/topicwisenotes/topicwisenotes";

import Sem4 from "./pages/sem4/sem4";

import Afl from "./pages/sem4/afl/afl";
import AflTopicNotes from "./pages/sem4/afl/topicwisenotes/topicwisenotes";

import Coa from "./pages/sem4/coa/coa";
import CoaTopicNotes from "./pages/sem4/coa/topicwisenotes/topicwisenotes";

import Dbms from "./pages/sem4/dbms/dbms";
import DbmsTopicNotes from "./pages/sem4/dbms/topicwisenotes/topicwisenotes";

import DbmsLab from "./pages/sem4/dbmslab/dbmslab";
import DbmsLabexperiments from "./pages/sem4/dbmslab/experiments/topicwisenotes";

import Os from "./pages/sem4/os/os";
import OsTopicNotes from "./pages/sem4/os/topicwisenotes/topicwisenotes";

import OsLab from "./pages/sem4/oslab/oslab";
import OsLabexperiments from "./pages/sem4/oslab/experiments/topicwisenotes";

import Wt from "./pages/sem4/wt/wt";
import WtTopicNotes from "./pages/sem4/wt/topicwisenotes/topicwisenotes";

import WtLab from "./pages/sem4/wtlab/wtlab";
import WtLabexperiments from "./pages/sem4/wtlab/experiments/topicwisenotes";

import Pdc from "./pages/sem4/pdc/pdc";
import PdcTopicNotes from "./pages/sem4/pdc/topicwisenotes/topicwisenotes";

import Sem5 from "./pages/sem5/sem5";

import Cn from "./pages/sem5/cn/cn";
import CnTopicNotes from "./pages/sem5/cn/topicwisenotes/topicwisenotes";

import Daa from "./pages/sem5/Daa/daa";
import DaaTopicNotes from "./pages/sem5/Daa/topicwisenotes/topicwisenotes";

import Hpc from "./pages/sem5/hpc/hpc";
import HpcTopicNotes from "./pages/sem5/hpc/topicwisenotes/topicwisenotes";

import Se from "./pages/sem5/Se/se";
import SeTopicNotes from "./pages/sem5/Se/topicwisenotes/topicwisenotes";

import Ai from "./pages/sem5/ai/ai";
import AiTopicNotes from "./pages/sem5/ai/topicwisenotes/topicwisenotes";

import Bd from "./pages/sem5/bd/bd";
import BdTopicNotes from "./pages/sem5/bd/topicwisenotes/topicwisenotes";

import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      <div className="left">
        <div className="top1">
          <img src={Kiit_logo} className="kiit_logo" alt=""></img>
        </div>
        <div className="middle1">
          <div className="sidebar" id="sidebar">
            <script src={sidebar}></script>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top2">
          <nav className="navbar navbar-light" id="navbar">
            <div className="sub1">
              <h3 className="SiteName">Student Saathi</h3>
            </div>
            <div className="sub2">
              {/* <a></a> */}
              <script src={NavBarChanger}></script>
            </div>
          </nav>
        </div>
        <div className="middle2">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/semselection" element={<SemSelection />} />
                <Route path="/feedback" element={<Feedback />}></Route>
                <Route path="/contact" element={<Contact />}></Route>

                <Route path="sem1">
                  <Route path="" element={<Sem1 />}></Route>

                  <Route path="bio">
                    <Route path="" element={<Bio />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<BioTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="bms">
                    <Route path="" element={<Bms />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<BmsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="chem">
                    <Route path="" element={<Chem />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<ChemTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="chemprac">
                    <Route path="" element={<Chemprac />}></Route>
                    <Route
                      path="experiments"
                      element={<Chempracexperiments />}
                    ></Route>
                  </Route>

                  <Route path="engggraph">
                    <Route path="" element={<Engggraph />}></Route>
                    <Route
                      path="assignments"
                      element={<Engggraphassignment />}
                    ></Route>
                  </Route>

                  <Route path="evs">
                    <Route path="" element={<Evs />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<EvsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="langlab">
                    <Route path="" element={<Langlab />}></Route>
                    <Route
                      path="assignments"
                      element={<Langlabassignment />}
                    ></Route>
                  </Route>

                  <Route path="maths1">
                    <Route path="" element={<Maths1 />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<Maths1TopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="pcomm">
                    <Route path="" element={<Pcomm />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<PcommTopicNotes />}
                    ></Route>
                  </Route>
                </Route>

                <Route path="sem2">
                  <Route path="" element={<Sem2 />}></Route>

                  <Route path="aec">
                    <Route path="" element={<Aec />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<AecTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="aeclab">
                    <Route path="" element={<AecLab />}></Route>
                    <Route
                      path="experiments"
                      element={<AecLabexperiments />}
                    ></Route>
                  </Route>

                  <Route path="bee">
                    <Route path="" element={<Bee />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<BeeTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="beelab">
                    <Route path="" element={<BeeLab />}></Route>
                    <Route
                      path="experiments"
                      element={<BeeLabexperiments />}
                    ></Route>
                  </Route>

                  <Route path="cprog">
                    <Route path="" element={<CProg />}></Route>
                    <Route
                      path="experiments"
                      element={<CProgexperiments />}
                    ></Route>
                  </Route>

                  <Route path="maths">
                    <Route path="" element={<Maths />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<MathsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="physics">
                    <Route path="" element={<Physics />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<PhysicsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="physicslab">
                    <Route path="" element={<PhysicsLab />}></Route>
                    <Route
                      path="experiments"
                      element={<PhysicsLabexperiments />}
                    ></Route>
                  </Route>
                </Route>

                <Route path="sem3">
                  <Route path="" element={<Sem3 />}></Route>

                  <Route path="dsa">
                    <Route path="" element={<Dsa />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<DsaTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="dsalab">
                    <Route path="" element={<Dsalab />}></Route>
                    <Route
                      path="assignments"
                      element={<Dsalabassignment />}
                    ></Route>
                  </Route>

                  <Route path="dec">
                    <Route path="" element={<Dec />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<DecTopicNotes />}
                    ></Route>
                    {/* <Route
                      path="calculators"
                      element={<BaseConverter />}
                    ></Route> */}
                  </Route>

                  <Route path="dms">
                    <Route path="" element={<Dms />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<DmsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="ee">
                    <Route path="" element={<Ee />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<EeTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="oop">
                    <Route path="" element={<Oop />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<OopTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="ooplab">
                    <Route path="" element={<Ooplab />}></Route>
                    <Route
                      path="assignments"
                      element={<Ooplabassignment />}
                    ></Route>
                  </Route>

                  <Route path="ps">
                    <Route path="" element={<Ps />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<PsTopicNotes />}
                    ></Route>
                  </Route>
                </Route>

                <Route path="sem4">
                  <Route path="" element={<Sem4 />}></Route>

                  <Route path="afl">
                    <Route path="" element={<Afl />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<AflTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="coa">
                    <Route path="" element={<Coa />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<CoaTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="dbms">
                    <Route path="" element={<Dbms />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<DbmsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="dbmslab">
                    <Route path="" element={<DbmsLab />}></Route>
                    <Route
                      path="experiments"
                      element={<DbmsLabexperiments />}
                    ></Route>
                  </Route>

                  <Route path="os">
                    <Route path="" element={<Os />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<OsTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="oslab">
                    <Route path="" element={<OsLab />}></Route>
                    <Route
                      path="experiments"
                      element={<OsLabexperiments />}
                    ></Route>
                  </Route>

                  <Route path="wt">
                    <Route path="" element={<Wt />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<WtTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="wtlab">
                    <Route path="" element={<WtLab />}></Route>
                    <Route
                      path="experiments"
                      element={<WtLabexperiments />}
                    ></Route>
                  </Route>

                  <Route path="pdc">
                    <Route path="" element={<Pdc />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<PdcTopicNotes />}
                    ></Route>
                  </Route>
                </Route>

                <Route path="sem5">
                  <Route path="" element={<Sem5 />}></Route>

                  <Route path="ai">
                    <Route path="" element={<Ai />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<AiTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="bd">
                    <Route path="" element={<Bd />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<BdTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="cn">
                    <Route path="" element={<Cn />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<CnTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="se">
                    <Route path="" element={<Se />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<SeTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="daa">
                    <Route path="" element={<Daa />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<DaaTopicNotes />}
                    ></Route>
                  </Route>

                  <Route path="hpc">
                    <Route path="" element={<Hpc />}></Route>
                    <Route
                      path="topicwisenotes"
                      element={<HpcTopicNotes />}
                    ></Route>
                  </Route>
                </Route>
              </Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div className="bottom2">
          <label htmlFor="Notice">
            This Project is made by the students of KIIT for their Minor Project
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
