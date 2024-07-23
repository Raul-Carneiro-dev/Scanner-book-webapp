import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Quagga from "quagga";

import { validateIsbn } from "../../../services/books";

import { Container, Video, ScanMarker } from "./styles";

function Scanner({ onScan }) {

    let scannerAttemps = 0;

    const onDetected = result => {
        Quagga.offDetected(onDetected);

        const isbn = result.codeResult.code;

        console.log(`Código lido: ${isbn}`)

        if (validateIsbn(isbn)) {
            onScan(isbn)
            return;
        }

        if (scannerAttemps >= 5) {
            alert('Não é possivel ler o código do livro, por favor, tente novamente.')
        }

        scannerAttemps += 1;
        Quagga.onDetected(onDetected);

    };


    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector("#video"),
                    constraints: {
                        facingMode: 'environment'
                    },
                },
                numOfWorkers: 1,
                locate: true,
                decoder: {
                    readers: ['ean_reader']
                },
            },
                err => {
                    if (err) {
                        console.error(err);
                        alert("Erro ao abrir a câmera de dispositivo, por favor, dê a permissão de uso");

                        return;
                    }

                    Quagga.start();
                },

                Quagga.onDetected(onDetected)
            );
        }
    }, [])

    return (
        <>
            <Video id="video" />
            <Container>
                <ScanMarker>
                    <img
                        src="../../../assets/images/scan-mark.svg"
                        alt="Marca para leitura do código" 
                        width="260"
                        height="260"
                    />
                    <p className="label">Aponte para o código de barras do livro</p>
                </ScanMarker>

                <img 
                    className="logo"
                    src="../../../assets/images/logo.svg"
                    alt="Dev Samurai" 
                    width="137"
                    height="69"
                />
            </Container>
        </>
    )

}

Scanner.propTypes = {
    onScan: PropTypes.func.isRequired
};

export default Scanner;

