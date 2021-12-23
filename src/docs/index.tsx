import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Modal from '../lib';
import * as S from './styles';
import { redModalTheme, hollowButtonTheme } from './theme';

function App() {
  const [isSimpleOpen, setSimpleOpen] = useState(false);
  const [isScrollingOpen, setScrollingOpen] = useState(false);
  const [isCenteredOpen, setCenteredOpen] = useState(false);
  const [isSmallOpen, setSmallOpen] = useState(false);
  const [isBareOpen, setBareOpen] = useState(false);
  const [isThemedOpen, setThemedOpen] = useState(false);
  const [isStackedOpen, setStackedOpen] = useState(false);
  const [isPetOpen, setPetOpen] = useState(false);
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Button expanded onClick={() => setSimpleOpen(true)}>Simple modal</S.Button>
      <S.Button expanded onClick={() => setBareOpen(true)}>Bare modal</S.Button>
      <S.Button expanded onClick={() => setScrollingOpen(true)}>Scrolling modal</S.Button>
      <S.Button expanded onClick={() => setCenteredOpen(true)}>Centered modal</S.Button>
      <S.Button expanded onClick={() => setSmallOpen(true)}>Small modal (no effect)</S.Button>
      <S.Button expanded onClick={() => setThemedOpen(true)}>Themed modal</S.Button>
      <S.Button expanded onClick={() => setStackedOpen(true)}>Stacked modals</S.Button>

      <Modal open={isSimpleOpen} onClose={() => setSimpleOpen(false)}>
        <Modal.Header>
          <Modal.Title>Simple modal</Modal.Title>
          <Modal.CloseButton onClick={() => setSimpleOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          Modal content...
        </Modal.Body>
        <Modal.Footer>
          <S.Button>Button</S.Button>
        </Modal.Footer>
      </Modal>

      <Modal open={isBareOpen} onClose={() => setBareOpen(false)}>
        Modal content...
      </Modal>

      <Modal open={isScrollingOpen} onClose={() => setScrollingOpen(false)}>
        <Modal.Header>
          <Modal.Title>Scrolling modal</Modal.Title>
          <Modal.CloseButton onClick={() => setScrollingOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <Modal.Footer>
          <S.Button>Button</S.Button>
        </Modal.Footer>
      </Modal>

      <Modal open={isCenteredOpen} onClose={() => setCenteredOpen(false)} centered={true}>
        <Modal.Header>
          <Modal.Title>Centered modal</Modal.Title>
          <Modal.CloseButton onClick={() => setCenteredOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          &hellip;
        </Modal.Body>
      </Modal>

      <Modal open={isSmallOpen} onClose={() => setSmallOpen(false)} size="small" effect="none">
        <Modal.Header>
          <Modal.Title>Small modal with no effect</Modal.Title>
          <Modal.CloseButton onClick={() => setSmallOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          &hellip;
        </Modal.Body>
      </Modal>

      <ThemeProvider theme={redModalTheme}>
        <ThemeProvider theme={hollowButtonTheme}>
          <Modal open={isThemedOpen} onClose={() => setThemedOpen(false)}>
            <Modal.Header>
              <Modal.Title>Themed modal</Modal.Title>
              <Modal.CloseButton onClick={() => setThemedOpen(false)} />
            </Modal.Header>
            <Modal.Body>
              Modal content...
            </Modal.Body>
            <Modal.Footer>
              <S.Button>Button</S.Button>
            </Modal.Footer>
          </Modal>
        </ThemeProvider>
      </ThemeProvider>

      <Modal.Provider>
        <Modal open={isStackedOpen} onClose={() => setStackedOpen(false)}>
          <Modal.Header>
            <Modal.Title>Stacked modal</Modal.Title>
            <Modal.CloseButton onClick={() => setStackedOpen(false)} />
          </Modal.Header>
          <Modal.Body>
            Modal content...
          </Modal.Body>
          <Modal.Footer>
            <S.Button onClick={() => setPetOpen(true)}>Open stacked!</S.Button>
          </Modal.Footer>
        </Modal>

        <Modal centered open={isPetOpen} onClose={() => setPetOpen(false)}>
          <Modal.Header>
            <Modal.Title>Pet modal</Modal.Title>
            <Modal.CloseButton onClick={() => setPetOpen(false)} />
          </Modal.Header>
          <Modal.Body>
            Modal content...
          </Modal.Body>
          <Modal.Footer>
            <S.Button>Button</S.Button>
          </Modal.Footer>
        </Modal>
      </Modal.Provider>
    </S.Container>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
