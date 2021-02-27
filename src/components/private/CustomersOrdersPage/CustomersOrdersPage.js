import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../common/PrivateNavBar';
import Wrapper from '../../common/Wrapper';

import CustomerOrders from './CustomerOrders';

import Button from '../../common/Button';
import AllowOrderingRadioGroup from './AllowOrderingRadioGroup';
import OrderHistory from './OrdersHistory';

import { sortByOrderNumber } from '../../../utils/orderUtils';
import { subscribeToOrders } from './api/subscribeToOrders';

import mute from '../../../img/mute.png';
import unmute from '../../../img/unmute.png';

const CustomersOrdersPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;

  .icon_container {
    display: flex;
    height: 100%;

    align-items: center;
    img {
      height: 3.5rem;
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  Button {
    text-transform: none;
    align-self: flex-end;
  }
`;

const CustomersOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [playAlarm, setPlayAlarm] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToOrders(setOrders, setPlayAlarm);
    return () => {
      unsubscribe();
    };
  }, [setOrders, setPlayAlarm]);

  return (
    <PageLayout>
      <CustomersOrdersPageBackground>
        <Wrapper>
          <PrivateNavBar />
          <OrderHeader isMuted={isMuted}>
            <h1>{showHistory ? 'Historie objednávek' : 'Objednávky'}</h1>

            <div className="icon_container">
              {showHistory ? <> </> : renderMuteIcon()}
              <Button primary onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? 'Objednávky' : 'Historie'}
              </Button>
            </div>
          </OrderHeader>
          {showHistory ? <OrderHistory /> : renderOrders()}
        </Wrapper>
      </CustomersOrdersPageBackground>
    </PageLayout>
  );

  function renderMuteIcon() {
    return (
      <img
        onClick={(event) => setIsMuted(!isMuted)}
        src={isMuted ? mute : unmute}
        alt="mute icon"
      ></img>
    );
  }

  function renderOrders() {
    return (
      <div>
        <AllowOrderingRadioGroup />
        <CustomerOrders
          isMuted={isMuted}
          playAlarm={playAlarm}
          setPlayAlarm={setPlayAlarm}
          orders={sortByOrderNumber(orders)}
        ></CustomerOrders>
      </div>
    );
  }
};

export default CustomersOrdersPage;
