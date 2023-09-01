import { Button, Form, Row, Col } from "react-bootstrap";
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {
  const { categorias } = useCategorias();
  console.log(categorias)

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre de bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ingrese el tipo de bebida"
              name="nombre"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria de bebida</Form.Label>
            <Form.Select id="categoria" name="categoria">
              <option>- Seleccione una categoria -</option>
              {categorias.map((categoria, index) => (
                <option
                  key={`categoria-${index}`}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button>Buscar Bebidas</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
