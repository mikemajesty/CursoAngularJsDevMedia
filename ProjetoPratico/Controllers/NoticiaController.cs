using ProjetoPratico.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjetoPratico.Controllers
{
    public class NoticiaController : Controller
    {
        private _DbContext banco;
        // GET: Noticia
        public ActionResult Index()
        {
            using (banco = new _DbContext())
            {
                var b = banco.Noticia.ToList();
                return View();
            }
          
        }
    }
}