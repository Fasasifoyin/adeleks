/* eslint-disable react/prop-types */
import { Text } from "@chakra-ui/react";
import { data } from "../../data/data";
import { Link } from "react-scroll";

const Links = () => {
  return (
    <>
      {data.links.map((each) => (
        <Link
          key={each.id}
          to={each.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={each.offSet}
          activeClass="text-purple"
          className="text-hover-purple"
        >
          <Text className="small-text cursor">{each.link}</Text>
        </Link>
      ))}
    </>
  );
};

export default Links;
