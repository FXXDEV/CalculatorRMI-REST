import Pyro.core
import Pyro.naming
import calc
class calculator(Pyro.core.ObjBase, calc.operations):
    def __init__(self):
            Pyro.core.ObjBase.__init__(self)
Pyro.core.initServer()
ns= Pyro.naming.NameServerLocator().getNS()
daemon=Pyro.core.Daemon()
daemon.useNameServer(ns)
uri=daemon.connect(calculator(),"simple")
print "Server is ready."
daemon.requestLoop()



# class calc:
#  def mul(s, arg1, arg2): return arg1*arg2
#  def add(s, arg1, arg2): return arg1+arg2
#  def sub(s, arg1, arg2): return arg1-arg2
#  def div(s, arg1, arg2): return arg1/arg2
