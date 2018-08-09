using Bridge;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using Bridge.Html5;
using DemoBridgeNet.Utils;

namespace DemoBridgeNet
{
    public class App
    {
        public static void Main()
        {
            var plus = new Sum();

            var button = new HTMLButtonElement()
            {
                InnerHTML = "Click me",
                OnClick = (ev) =>
                {
                    Console.WriteLine("Success");
                }
            };

            var inputFirst = new HTMLInputElement()
            {
                Type = InputType.Number,
                Name = "InpurFirst",
            };

            var inputSecond = new HTMLInputElement()
            {
                Type = InputType.Number,
                Name = "SecondFirst",
            };

            var buttonSum = new HTMLButtonElement()
            {
                InnerHTML = "plus",
                OnClick = (ev) =>
                {
                    plus.First = int.Parse(inputFirst.Value);
                    plus.Second = int.Parse(inputSecond.Value);

                    Console.WriteLine($"sum: {plus.Result}");
                }
            };

            var div = new HTMLDivElement();

            Document.Body.AppendChild(button);
            Document.Body.AppendChild(div);
            div.AppendChild(inputFirst);
            div.AppendChild(inputSecond);
            div.AppendChild(buttonSum);

            var calculator = new Calculator();
            calculator.Plus(10, 20);
            calculator.Minus(10, 20);
            calculator.Multiply(10, 20);
            calculator.Divide(10, 20);
            calculator.Pow(2, 4);
            calculator.Sqrt(9);

            Console.WriteLine("Console message after added button");
        }
    }

    public class Sum
    {
        public int First { get; set; }
        public int Second { get; set; }

        public int Result => First + Second;
    }
}