define(["require", "exports"], function (require, exports) {
    var DataView = (function () {
        function DataView() {
            this.title = 'DataGrid Example';
            this.data = [{
                    id: 1,
                    FName: 'Leroy',
                    LName: 'Gibbs',
                    SDate: '1951-09-02',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 2,
                    FName: 'Tony',
                    LName: 'DiNozzo',
                    SDate: '1968-07-08',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 3,
                    FName: 'Tim',
                    LName: 'McGee',
                    SDate: '1977-11-15',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 4,
                    FName: 'Eleanor',
                    LName: 'Bishop',
                    SDate: '1984-04-26',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 5,
                    FName: 'Abagail',
                    LName: 'Scuitto',
                    SDate: '1969-03-27',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 6,
                    FName: 'Donald',
                    LName: 'Mallard',
                    SDate: '1933-09-19',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 7,
                    FName: 'Jimmy',
                    LName: 'Palmer',
                    SDate: '1977-11-14',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }, {
                    id: 8,
                    FName: 'Leon',
                    LName: 'Vance',
                    SDate: '1963-07-08',
                    Amount: Math.random() * 100000,
                    Count: Math.random() * 10000000,
                    Currency: 'USD'
                }];
        }
        DataView.prototype.getFullName = function ($event) {
            $event.value = $event.data.model.FName + " <strong>" + $event.data.model.LName + "</strong>";
        };
        return DataView;
    })();
    exports.DataView = DataView;
});
