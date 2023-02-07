import React from "react";
import { motion } from "framer-motion";
import Skill from "components/Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 justify-center xl:space-y-10 mx-auto items-center"
    >
      <h3 className="sectionHeader">Skills</h3>

      <div className="grid grid-cols-4 gap-5 mt-20">
        <Skill
          src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
          alt="HTML"
        />
        <Skill
          src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
          alt="CSS"
        />
        <Skill
          src="data:image/png;base64,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"
          alt="JavaScript"
        />
        <Skill
          src="https://ionicframework.com/docs/icons/logo-react-icon.png"
          alt="React"
        />
        <Skill
          src="https://image.pngaaa.com/168/5051168-middle.png"
          alt="Node.js"
        />
        <Skill
          src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
          alt="ExpressJS"
        />
        <Skill
          src="https://www.pngrepo.com/png/331488/512/mongodb.png"
          alt="mongoDB"
        />
        <Skill
          src="https://w7.pngwing.com/pngs/230/125/png-transparent-postgresql-relational-database-management-system-microsoft-sql-server-others-blue-logo-programming-language.png"
          alt="PostgreSQL"
        />
        <Skill
          src="https://banner2.cleanpng.com/20180712/yka/kisspng-professional-python-programmer-computer-programmin-python-logo-download-5b47725c1cc0d6.3474912915314089881178.jpg"
          alt="Python"
        />
        <Skill
          src="https://camo.githubusercontent.com/bcd4bda49ef6cd9537db065920f4f4f6ac670eae0e0adf2c5133c19b319f1574/68747470733a2f2f627261646c632e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f627261646c632f7673636f64652d7461696c77696e646373732f302e322e302f313535383034303536333634392f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74"
          alt="TailwindCSS"
        />
        <Skill
          src="https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-28.jpg"
          alt="Bootstrap"
        />
        <Skill
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          alt="TypeScript"
        />
        <Skill
          src="https://coursework.vschool.io/content/images/2016/06/jwt.png"
          alt="JWT"
        />
        <Skill
          src="https://e7.pngegg.com/pngimages/307/948/png-clipart-socket-io-node-js-javascript-network-socket-websocket-electrical-cable-angle-triangle.png"
          alt="Socket.io"
        />
      </div>
    </motion.div>
  );
}
