/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.2.0
 */
Bridge.assembly("DemoBridgeNet", function ($asm, globals) {
    "use strict";

    Bridge.define("DemoBridgeNet.App", {
        main: function Main () {
            var $t;
            var plus = new DemoBridgeNet.Sum();

            var button = ($t = document.createElement("button"), $t.innerHTML = "Click me", $t.onclick = function (ev) {
                System.Console.WriteLine("Success");
            }, $t);

            var inputFirst = ($t = document.createElement("input"), $t.type = "number", $t.name = "InpurFirst", $t);

            var inputSecond = ($t = document.createElement("input"), $t.type = "number", $t.name = "SecondFirst", $t);

            var buttonSum = ($t = document.createElement("button"), $t.innerHTML = "plus", $t.onclick = function (ev) {
                plus.First = System.Int32.parse(inputFirst.value);
                plus.Second = System.Int32.parse(inputSecond.value);

                System.Console.WriteLine(System.String.format("sum: {0}", [Bridge.box(plus.Result, System.Int32)]));
            }, $t);

            var div = document.createElement("div");

            document.body.appendChild(button);
            document.body.appendChild(div);
            div.appendChild(inputFirst);
            div.appendChild(inputSecond);
            div.appendChild(buttonSum);

            var calculator = new DemoBridgeNet.Utils.Calculator();
            calculator.Plus(10, 20);
            calculator.Minus(10, 20);
            calculator.Multiply(10, 20);
            calculator.Divide(10, 20);
            calculator.Pow(2, 4);
            calculator.Sqrt(9);

            System.Console.WriteLine("Console message after added button");
        }
    });

    Bridge.define("DemoBridgeNet.Sum", {
        fields: {
            First: 0,
            Second: 0
        },
        props: {
            Result: {
                get: function () {
                    return ((this.First + this.Second) | 0);
                }
            }
        }
    });

    /** @namespace DemoBridgeNet.Utils */

    /**
     * Class of calculating
     *
     * @public
     * @class DemoBridgeNet.Utils.Calculator
     */
    Bridge.define("DemoBridgeNet.Utils.Calculator", {
        methods: {
            Plus: function (a, b) {
                var result = a + b;
                System.Console.WriteLine(System.Double.format(result));
                return result;
            },
            Minus: function (a, b) {
                var result = a - b;
                System.Console.WriteLine(System.Double.format(result));
                return result;
            },
            Multiply: function (a, b) {
                var result = a * b;
                System.Console.WriteLine(System.Double.format(result));
                return result;
            },
            Divide: function (a, b) {
                var result = a / b;
                System.Console.WriteLine(System.Double.format(result));
                return result;
            },
            Pow: function (a, b) {
                var result = Math.pow(a, b);
                System.Console.WriteLine(System.Double.format(result));
                return result;
            },
            Sqrt: function (a) {
                var result = Math.sqrt(a);
                System.Console.WriteLine(System.Double.format(result));
                return result;
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJEZW1vQnJpZGdlTmV0LmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJBcHAuY3MiLCJDYWxjdWxhdG9yLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztZQWNZQSxXQUFXQSxJQUFJQTs7WUFFZkEsYUFBYUEsZ0ZBR0NBLFVBQUNBO2dCQUVQQTs7O1lBSVJBLGlCQUFpQkEsaURBRU5BOztZQUlYQSxrQkFBa0JBLGlEQUVQQTs7WUFJWEEsZ0JBQWdCQSw0RUFHRkEsVUFBQ0E7Z0JBRVBBLGFBQWFBLG1CQUFVQTtnQkFDdkJBLGNBQWNBLG1CQUFVQTs7Z0JBRXhCQSx5QkFBa0JBLGtDQUF5QkE7OztZQUluREEsVUFBVUE7O1lBRVZBLDBCQUEwQkE7WUFDMUJBLDBCQUEwQkE7WUFDMUJBLGdCQUFnQkE7WUFDaEJBLGdCQUFnQkE7WUFDaEJBLGdCQUFnQkE7O1lBRWhCQSxpQkFBaUJBLElBQUlBO1lBQ3JCQTtZQUNBQTtZQUNBQTtZQUNBQTtZQUNBQTtZQUNBQTs7WUFFQUE7Ozs7Ozs7Ozs7OztvQkFZSkEsT0FBT0EsZUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDaEVJQSxHQUFVQTtnQkFFekJBLGFBQWFBLElBQUlBO2dCQUNqQkEsOENBQWtCQTtnQkFDbEJBLE9BQU9BOzs2QkFHU0EsR0FBVUE7Z0JBRTFCQSxhQUFhQSxJQUFJQTtnQkFDakJBLDhDQUFrQkE7Z0JBQ2xCQSxPQUFPQTs7Z0NBR1lBLEdBQVVBO2dCQUU3QkEsYUFBYUEsSUFBSUE7Z0JBQ2pCQSw4Q0FBa0JBO2dCQUNsQkEsT0FBT0E7OzhCQUdVQSxHQUFVQTtnQkFFM0JBLGFBQWFBLElBQUlBO2dCQUNqQkEsOENBQWtCQTtnQkFDbEJBLE9BQU9BOzsyQkFHT0EsR0FBVUE7Z0JBRXhCQSxhQUFhQSxTQUFTQSxHQUFHQTtnQkFDekJBLDhDQUFrQkE7Z0JBQ2xCQSxPQUFPQTs7NEJBR1FBO2dCQUVmQSxhQUFhQSxVQUFVQTtnQkFDdkJBLDhDQUFrQkE7Z0JBQ2xCQSxPQUFPQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIE5ld3RvbnNvZnQuSnNvbjtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWwuRGF0YUFubm90YXRpb25zO1xyXG51c2luZyBTeXN0ZW0uRGlhZ25vc3RpY3MuQ29kZUFuYWx5c2lzO1xyXG51c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIERlbW9CcmlkZ2VOZXQuVXRpbHM7XHJcblxyXG5uYW1lc3BhY2UgRGVtb0JyaWRnZU5ldFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBsdXMgPSBuZXcgU3VtKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gbmV3IEhUTUxCdXR0b25FbGVtZW50KClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSW5uZXJIVE1MID0gXCJDbGljayBtZVwiLFxyXG4gICAgICAgICAgICAgICAgT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5wdXRGaXJzdCA9IG5ldyBIVE1MSW5wdXRFbGVtZW50KClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVHlwZSA9IElucHV0VHlwZS5OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBOYW1lID0gXCJJbnB1ckZpcnN0XCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5wdXRTZWNvbmQgPSBuZXcgSFRNTElucHV0RWxlbWVudCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFR5cGUgPSBJbnB1dFR5cGUuTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgTmFtZSA9IFwiU2Vjb25kRmlyc3RcIixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBidXR0b25TdW0gPSBuZXcgSFRNTEJ1dHRvbkVsZW1lbnQoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJbm5lckhUTUwgPSBcInBsdXNcIixcclxuICAgICAgICAgICAgICAgIE9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5GaXJzdCA9IGludC5QYXJzZShpbnB1dEZpcnN0LlZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBwbHVzLlNlY29uZCA9IGludC5QYXJzZShpbnB1dFNlY29uZC5WYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKHN0cmluZy5Gb3JtYXQoXCJzdW06IHswfVwiLHBsdXMuUmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZGl2ID0gbmV3IEhUTUxEaXZFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBEb2N1bWVudC5Cb2R5LkFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkJvZHkuQXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgZGl2LkFwcGVuZENoaWxkKGlucHV0Rmlyc3QpO1xyXG4gICAgICAgICAgICBkaXYuQXBwZW5kQ2hpbGQoaW5wdXRTZWNvbmQpO1xyXG4gICAgICAgICAgICBkaXYuQXBwZW5kQ2hpbGQoYnV0dG9uU3VtKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcclxuICAgICAgICAgICAgY2FsY3VsYXRvci5QbHVzKDEwLCAyMCk7XHJcbiAgICAgICAgICAgIGNhbGN1bGF0b3IuTWludXMoMTAsIDIwKTtcclxuICAgICAgICAgICAgY2FsY3VsYXRvci5NdWx0aXBseSgxMCwgMjApO1xyXG4gICAgICAgICAgICBjYWxjdWxhdG9yLkRpdmlkZSgxMCwgMjApO1xyXG4gICAgICAgICAgICBjYWxjdWxhdG9yLlBvdygyLCA0KTtcclxuICAgICAgICAgICAgY2FsY3VsYXRvci5TcXJ0KDkpO1xyXG5cclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJDb25zb2xlIG1lc3NhZ2UgYWZ0ZXIgYWRkZWQgYnV0dG9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgU3VtXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGludCBGaXJzdCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBTZWNvbmQgeyBnZXQ7IHNldDsgfVxyXG5wdWJsaWMgaW50IFJlc3VsdFxyXG57XHJcbiAgICBnZXRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gRmlyc3QgKyBTZWNvbmQ7XHJcbiAgICB9XHJcbn0gICAgfVxyXG59IiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIERlbW9CcmlkZ2VOZXQuVXRpbHNcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIENsYXNzIG9mIGNhbGN1bGF0aW5nXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIENhbGN1bGF0b3JcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZG91YmxlIFBsdXMoZG91YmxlIGEsIGRvdWJsZSBiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGEgKyBiO1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShyZXN1bHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRvdWJsZSBNaW51cyhkb3VibGUgYSwgZG91YmxlIGIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYSAtIGI7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZG91YmxlIE11bHRpcGx5KGRvdWJsZSBhLCBkb3VibGUgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhICogYjtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUocmVzdWx0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkb3VibGUgRGl2aWRlKGRvdWJsZSBhLCBkb3VibGUgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhIC8gYjtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUocmVzdWx0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkb3VibGUgUG93KGRvdWJsZSBhLCBkb3VibGUgYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBNYXRoLlBvdyhhLCBiKTtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUocmVzdWx0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkb3VibGUgU3FydChkb3VibGUgYSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBNYXRoLlNxcnQoYSk7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
