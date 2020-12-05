import styled from 'styled-components';

const MapStyled = styled.div`
  width: 100%;
  filter: grayscale(100%);
`;

const Map = () => {
  return (
    <MapStyled>
      <embed
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12485.453901974972!2d16.521014956986438!3d49.17407849347913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47129639e78dc763%3A0xab8898102515c331!2sJihlavsk%C3%A1%20671%2F7%2C%20664%2041%20Troubsko!5e0!3m2!1sen!2scz!4v1601662461978!5m2!1sen!2scz"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></embed>
    </MapStyled>
  );
};

export default Map;
