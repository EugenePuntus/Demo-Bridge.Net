using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoBridgeNet.Utils
{
    /// <summary>
    /// Class of calculating
    /// </summary>
    public class Calculator
    {
        public double Plus(double a, double b)
        {
            var result = a + b;
            Console.WriteLine(result);
            return result;
        }

        public double Minus(double a, double b)
        {
            var result = a - b;
            Console.WriteLine(result);
            return result;
        }

        public double Multiply(double a, double b)
        {
            var result = a * b;
            Console.WriteLine(result);
            return result;
        }

        public double Divide(double a, double b)
        {
            var result = a / b;
            Console.WriteLine(result);
            return result;
        }

        public double Pow(double a, double b)
        {
            var result = Math.Pow(a, b);
            Console.WriteLine(result);
            return result;
        }

        public double Sqrt(double a)
        {
            var result = Math.Sqrt(a);
            Console.WriteLine(result);
            return result;
        }
    }
}
