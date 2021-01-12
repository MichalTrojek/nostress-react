import styled from 'styled-components';
import { motion } from 'framer-motion';

const OrderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  .orderContainer__heading {
    padding-bottom: 1rem;
  }
  .orderContainer__button {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 411px) {
    .orderContainer__button {
      font-size: 1.3rem;
    }
  }
`;

export default OrderContainer;
