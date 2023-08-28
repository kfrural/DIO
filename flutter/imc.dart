import 'package:flutter/material.dart';

void main() {
  runApp(IMCCalculatorApp());
}

class IMCCalculatorApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: IMCCalculatorScreen(),
    );
  }
}

class IMCCalculatorScreen extends StatefulWidget {
  @override
  _IMCCalculatorScreenState createState() => _IMCCalculatorScreenState();
}

class _IMCCalculatorScreenState extends State<IMCCalculatorScreen> {
  double _weight = 60;
  double _height = 170;
  double _imc = 0;

  void _calculateIMC() {
    setState(() {
      _imc = _weight / ((_height / 100) * (_height / 100));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('IMC Calculator'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Calculadora de IMC',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 20),
            Text('Peso (kg):'),
            Slider(
              value: _weight,
              min: 0,
              max: 150,
              onChanged: (newValue) {
                setState(() {
                  _weight = newValue;
                });
              },
            ),
            Text('Altura (cm):'),
            Slider(
              value: _height,
              min: 0,
              max: 250,
              onChanged: (newValue) {
                setState(() {
                  _height = newValue;
                });
              },
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _calculateIMC,
              child: Text('Calcular'),
            ),
            SizedBox(height: 20),
            Text(
              'IMC: ${_imc.toStringAsFixed(2)}',
              style: TextStyle(fontSize: 24),
            ),
          ],
        ),
      ),
    );
  }
}
