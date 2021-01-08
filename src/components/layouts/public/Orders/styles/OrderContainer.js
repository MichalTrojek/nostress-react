import styled from 'styled-components';
import { motion } from 'framer-motion';

const OrderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  Button {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 411px) {
    Button {
      font-size: 1.3rem;
    }
  }
`;

export default OrderContainer;
