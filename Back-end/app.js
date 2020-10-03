var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const indexRouter = require('./routes/index')
const carrinhoRouter = require('./routes/carrinho')
const confirmacaoDePagamentoRouter = require('./routes/confirmacaoDePagamento')
const paginaAlterarEnderecoRouter = require('./routes/paginaAlterarEndereco')
const paginaAlteraPagamentoRouter = require('./routes/paginaAlterarPagamento')
const paginaEnvioPagamentoRouter = require('./routes/paginaEnvioPagamento')
const paginaFinalizarPedidoRouter = require('./routes/paginaFinalizarPedido')
const paginaLoginRouter = require('./routes/paginaLogin')
const politicasTermosRouter = require('./routes/politica-termos')
const sobreNosRouter = require('./routes/sobreNos')
const produto01Router = require('./routes/produto01')
const trocasDevRouter = require('./routes/trocasDev')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/index', indexRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/confirmacaoDePagamento', confirmacaoDePagamentoRouter);
app.use('/paginaAlterarEndereco', paginaAlterarEnderecoRouter);
app.use('/paginaAlterarPagamento', paginaAlteraPagamentoRouter);
app.use('/paginaEnvioPagamento', paginaEnvioPagamentoRouter);
app.use('/paginaFinalizarPedido', paginaFinalizarPedidoRouter);
app.use('/paginaLogin', paginaLoginRouter );
app.use('/politica-termos', politicasTermosRouter);
app.use('/sobreNos', sobreNosRouter);
app.use('/produto01', produto01Router);
app.use('/trocasDev', trocasDevRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
